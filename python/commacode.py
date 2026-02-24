
def comma_code(items):
    if not items:
        return ""
    if len(items) ==1:
        return str(items[0])
    return  ", ".join(str(item) for item in items[:-1]) + ", and "+ str(items[-1])

#spam = ['apples', 'bananas', 'tofu', 'cats']
spam =[]
print(comma_code(spam))        # apples, bananas, tofu, and cats

