p = "myNoobPass1234"

res = [x for x in p] # results in individual components
res2 = [x for x in "1234"] # ['1','2','3','4']

#print res2 

UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

res3 = [x for x in p if x in UC_LETTERS] # only 'N' and 'P' matches elements in UC_LETTERS
res4 = [1 for x in p if x in UC_LETTERS] # [1, 1]
res5 = [1 if x in UC_LETTERS else 0 for x in p] # [0,0,1,0,0,0,1,0,0,0,0,0,0,0]

#print res5

LC_LETTERS="abcdefghijklmnopqrstuvwxyz"
NUMS="1234567890"

def passwordMin(pw):
    test = [1 if x in UC_LETTERS else 2 if x in LC_LETTERS else 3 if x in NUMS else 0 for x in pw]
    return 1 in test and 2 in test and 3 in test

p = 'password'
p2 = 'passw0rd'
p3 = 'Passw0rd'

print p3 + ': ' + str(passwordMin(p3))

def passwordStrength(pw):
    
