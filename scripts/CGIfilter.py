import sys, json;
data = json.load(sys.stdin)

filtered = [x for x in data if x['english'] != 'Earwig and the Witch']

print(json.dumps(filtered))