import json, os

path = os.path.join(os.path.dirname(__file__), 'accel.json')
data_file = open(path, 'r')
data = json.load(data_file)
print(data)
