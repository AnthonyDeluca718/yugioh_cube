from PIL import Image, ImageDraw, ImageFont
import os, json

# img = Image.new('RGB', (100, 30), color = (73, 109, 137))
#
# fnt = ImageFont.truetype('/Library/Fonts/Arial.ttf', 15)
# d = ImageDraw.Draw(img)
# d.text((10,10), "Hello world", font=fnt, fill=(255, 255, 0))

path = os.path.join(os.path.dirname(__file__), 'set-1-copy', 'Accel_Synchron.png')
im = Image.open(path)
width, height = im.size
draw = ImageDraw.Draw(im)
draw.rectangle([(0, height - 100), (height, height)], (73, 109, 137))

path = os.path.join(os.path.dirname(__file__), 'accel.json')
data_file = open(path, 'r')
data = json.load(data_file)
print(data)

im.save('accel.png')

print(width)
print(height)

# path = os.path.join(os.path.dirname(__file__), 'set-1-copy')
# pictures = os.listdir(path)
#
# for pic in pictures:
#   path = os.path.join(os.path.dirname(__file__), 'set-1-copy', pic)
#   im = Image.open(path)
#   width, height = im.size
#   print(width)
#   print(height)
