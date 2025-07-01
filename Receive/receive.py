import argparse
import socket

from typing import List
from pythonosc import dispatcher
from pythonosc import osc_server

OSC_ADDRESS_WILD_CARD = "/*"
OSC_ADDRESS_STRING = "/send/string"

def printdata(address: str, *osc_arguments: List[str]):
    print(address + "  " + str(osc_arguments[0]))
    if address == OSC_ADDRESS_STRING:
        print("Received string: {}".format(osc_arguments[0]))
    else:
        print("Received data on unknown address: {}".format(address))

parser = argparse.ArgumentParser()
parser.add_argument("---ip", default="127.0.0.1", help="The ip to listem on") # IP: 127.0.0.1(Localhost)
parser.add_argument("---port", type=int, default=9001, help="The port to listen on")# Port: 9001

args = parser.parse_args()
dispatcher = dispatcher.Dispatcher()
dispatcher.map(OSC_ADDRESS_WILD_CARD, printdata)

server = osc_server.ThreadingOSCUDPServer((args.ip, args.port), dispatcher)
print("Serving on {}".format(server.server_address))
server.serve_forever()
