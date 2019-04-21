from PIL import Image, ImageDraw, ImageFont
import os, json, textwrap

fnt = ImageFont.truetype('/Library/Fonts/Arial.ttf', 12)
fnt_black = ImageFont.truetype('/Library/Fonts/Arial Black.ttf', 14)
char_limit = 60
ascent, descent = fnt.getmetrics()
line_height = ascent + descent + 1
ascent_black, descent_black = fnt_black.getmetrics()
line_height_black = ascent_black + descent_black + 1

def add_text(data, image, output_name):
  text = data['text']
  card_type = data['card_type']

  text_lines = text.split("\n")
  if card_type == 'Monster' and 'Synchro' in data['types'].split(' / '):
    text_content = " ".join(text_lines[slice(1, len(text_lines))])
    lines = textwrap.wrap(text_lines[0], char_limit) + textwrap.wrap(text_content, char_limit)
  else:
    text_content = " ".join(text_lines)
    lines = textwrap.wrap(text_content, char_limit)

  width, height = image.size
  text_box = "\n".join(lines)

  draw = ImageDraw.Draw(image)

  if (card_type == 'Monster'):
    box_height = max([(len(lines))*line_height + 2 * line_height_black, 130])
    draw.rectangle([(0, height - box_height), (width, height)], (255, 255, 255))
    draw.text((3, height - box_height), data['types'], font=fnt_black, fill=(0, 0, 0))
    draw.text((3, height - box_height + line_height_black), text_box, font=fnt, fill=(0, 0, 0))
    draw.text((3, height - line_height_black), data['stats'], font=fnt_black, fill=(0, 0, 0))
  else:
    box_height = max([(len(lines))*line_height, 130])
    draw.rectangle([(0, height - box_height), (width, height)], (255, 255, 255))
    draw.text((3, height - box_height), text_box, font=fnt, fill=(0, 0, 0))
  image.save(output_name)


im_path = os.path.join(os.path.dirname(__file__), 'set-1-copy', 'Allure_of_Darkness.png')
im = Image.open(im_path)
im = im.resize((353, 501))

data_path = os.path.join(os.path.dirname(__file__), 'test', 'Allure_of_Darkness.json')
data_file = open(data_path, 'r')
data = json.load(data_file)

add_text(data, im, 'Allure2.png')
