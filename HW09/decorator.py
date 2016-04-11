def make_bold(fn):
    return lambda : "<b>" + fn() + "</b>"

def make_italic(fn):
    return lambda : "<i>" + fn() + "</i>"

@make_bold
@make_italic
def hello():
    return "hello world"

helloHTML = hello()

print helloHTML

def timer(f):
    def inner(*arg):
        t=time.time()
        x=f(*arg)
        print "execution time: " + str(time.time() - t)
        return x
    return timer
        
def randlist(fn , lower=-100, upper=100):
    l = []
    for i in range(n):
        l.append(random.randrange(lower,upper)
