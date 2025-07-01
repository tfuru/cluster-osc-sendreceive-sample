# ワールド内から送信されたOSCメッセージを受信するサンプル
このサンプルは、OSCメッセージを受信するための基本的な実装を示しています。


# 構成
- Python 3.x
- python-osc

# インストール
```
pyenv local 3.11.3
pip install -r requirements.txt
```

# 実行
```
python receive.py
# python receive.py ---ip 192.168.10.109　---port 9001

Serving on ('127.0.0.1', 9001)
/send/string  abcdefg
Received string: abcdefg
```
