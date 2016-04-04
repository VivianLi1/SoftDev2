def inc(x):
    return x + 1

f = inc

print f(10) # 11

def h(x):
    return lambda y: x + y

h(1)
h(2)
h(1)(3)
h(2)(5)
