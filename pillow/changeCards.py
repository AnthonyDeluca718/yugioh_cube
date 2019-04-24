import json, os
from card import add_text, save_image

path = os.path.join(os.path.dirname(__file__), 'cardlist2.json')
data_file = open(path, 'r')
data = json.load(data_file)

start = 0
keys = list(data.keys())
for i in range(start, len(keys)):
  print(i)
  name = keys[i]
  save_image(name, data[name], 'images', 'image-output-2')

# save_image('Gene-Warped_Warwolf', data['Gene-Warped_Warwolf'], 'images', 'image-output')
