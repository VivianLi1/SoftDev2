import random

def doubler(f):
    def inner():
        name=f()
        return name+name
    return inner

@doubler
def get_name():
    names = ['tom','sue','lisa','harry','sarah','horatio']
    return random.choice(names)

print get_name()

# A decorator encaptulates a closure
# A Python decorator allows you to transparently wrap functionality
