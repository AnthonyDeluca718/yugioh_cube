import json, os
from card import add_text, save_image

path = os.path.join(os.path.dirname(__file__), 'cardlist.json')
data_file = open(path, 'r')
data = json.load(data_file)

for name in data:
  save_image(name, data[name], 'images', 'image-output')
