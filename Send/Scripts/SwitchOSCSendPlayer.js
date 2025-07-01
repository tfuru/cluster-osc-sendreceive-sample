/** SwitchOSCSendPlayer.js
 * 
 * 
 */

const MODE_PLAYER = {
  INITIALIZED: "INITIALIZED",
  OSC_SEND: "OSC_SEND"
}

// OSCアドレス定義
const OSC_ADDRESS_STRING = "/send/string";

// 初期化
const initialized = () => {
  _.log("SwitchOSCSendPlayer initialized");
}

const oscSend = (arg) => {
  _.log(`SwitchOSCSendPlayer oscSend: ${arg.text}`);
  
  // OSC送信処理をここに実装
  const oscHandle = _.oscHandle;
  oscHandle.send(new OscMessage(OSC_ADDRESS_STRING, [OscValue.asciiString(arg.text)]));
}

_.onReceive((messageType, arg, sender) => {
  _.log(`Received message: ${messageType}, ${arg}`);
  switch (messageType) {
    case MODE_PLAYER.INITIALIZED:
      initialized();
      break;
    case MODE_PLAYER.OSC_SEND:
      // OSC送信処理
      oscSend(arg);
      break;
    default:
      _.log(`Unhandled message type: ${messageType}`);
      break;
  }
});
