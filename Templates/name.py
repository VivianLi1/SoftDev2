import random
def get_name():
    names = ['tom','sue','harry','lisa','sarah','horatio']
    return random.choice(names)

def dble(f):
    name = f()
    return name+name

print dble(get_name)

get_name = dble(get_name)

print get_name
