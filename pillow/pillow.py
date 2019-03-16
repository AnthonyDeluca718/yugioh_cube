from PIL import Image, ImageDraw, ImageFont
import os, json, textwrap


# img = Image.new('RGB', (100, 30), color = (73, 109, 137))
#
# fnt = ImageFont.truetype('/Library/Fonts/Arial.ttf', 15)
# d = ImageDraw.Draw(img)
# d.text((10,10), "Hello world", font=fnt, fill=(255, 255, 0))

path = os.path.join(os.path.dirname(__file__), 'set-1-copy', 'Accel_Synchron.png')
im = Image.open(path)
im = im.resize((355, 503))

width, height = im.size

path = os.path.join(os.path.dirname(__file__), 'accel.json')
data_file = open(path, 'r')
data = json.load(data_file)

fnt = ImageFont.truetype('/Library/Fonts/Times New Roman.ttf', 12)
o_text = " ".join(data['text'].split("\n"))

lines = textwrap.wrap(o_text, 70)
text_box = "\n".join(lines)
ascent, descent = fnt.getmetrics()
box_height = (len(lines)+1)*(ascent + descent)
draw = ImageDraw.Draw(im)
draw.rectangle([(0, height - box_height), (width, height)], (255, 255, 255))
draw.text((0, height-box_height), text_box, font=fnt, fill=(0, 0, 0))

im.save('accel.png')

# path = os.path.join(os.path.dirname(__file__), 'set-1-copy')
# pictures = os.listdir(path)
#
# for pic in pictures:
#   path = os.path.join(os.path.dirname(__file__), 'set-1-copy', pic)
#   im = Image.open(path)
#   width, height = im.size
#   print(width)
#   print(height)
