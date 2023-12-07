import os
import json

def WriteFile(path, obj):
    with open(file=path, mode="w") as f:
        f.write(json.dumps(obj, indent=2, cls=SetEncoder))

class SetEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, set):
            return list(obj)
        return json.JSONEncoder.default(self, obj)