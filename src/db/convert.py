#####################################
## CODE FOR CONVERTING CSV TO JSON ##
#####################################
import csv, json

data = []

with open('./animatics.csv', encoding='utf-8') as f_csv:
	r_csv = csv.DictReader(f_csv)
	for row in r_csv:
		data.append(row)

with open('animatics.json', 'w', encoding='utf-8') as f_json:
	jsonString = json.dumps(data, indent=4)
	f_json.write(jsonString)
