def pt(n):
    list = []
    for a in range(1,n):
        for b in range(a,n):
            for c in range(b,n):
                if a*a + b*b == c*c:
                    list.append([a,b,c])

    return list

#print pt(15)
#print pt(0)

def pt2(n):
    list = [[a,b,c]
            for a in range(1,n)
            for b in range(a,n)
            for c in range(b,n)
            if(a*a + b*b == c*c)
            ]
    return list

print pt2(15)
print pt2(0)

def 
