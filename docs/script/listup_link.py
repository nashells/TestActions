# マークダウンファイルを引数として受け取り、その中に含まれるリンクを抽出し、
# 標準出力に出力するPythonスクリプト

import sys
import re

# マークダウンファイルを引数として受け取る
if len(sys.argv) != 2:
    print("Usage: python listup_link.py <markdown file>")
    sys.exit()

# マークダウンファイルを読み込む
file_name = sys.argv[1]
with open(file_name, "r") as f:
    lines = f.readlines()

    # リンクを抽出する
    pattern = r"\[.*?\]\((.*?)\)"
    for line in lines:
        match = pattern.search(line)
        if match:
            # URL部分を抽出する
            url = match.group(1)
            print(url)