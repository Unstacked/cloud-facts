import os
import json

def WriteFile(path, obj):
    with open(file=path, mode="w") as f:
        f.write(json.dumps(obj, indent=2, cls=SetEncoder, sort_keys=True))

def WriteTypedFile(path, obj, type):
    with open(file=path, mode="w") as f:
        dump = json.dumps(obj, indent=2, cls=SetEncoder, sort_keys=True)
        f.write(f"{type} = {dump}")

class SetEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, set):
            return sorted(list(obj))
        if isinstance(obj, list):
            return sorted(obj)
        return json.JSONEncoder.default(self, obj)