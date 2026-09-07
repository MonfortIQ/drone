import re

with open('assets/js/animations.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Remove the premature closures
js = js.replace("}, 2500); // 2.5 seconds safety net\n\n});\n    });", "}, 2500); // 2.5 seconds safety net")

# Add the final closure at the end of the file if not present
if not js.strip().endswith("});"):
    js += "\n});"

with open('assets/js/animations.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Fixed the structural syntax error in animations.js!")
