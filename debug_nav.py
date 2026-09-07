import os, re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'(<nav class="navbar.*?</nav>)', content, re.DOTALL)
if match:
    with open('nav_debug.txt', 'w', encoding='utf-8') as f:
        f.write(match.group(1))
