#    Union of the sets A and B, denoted A ∪ B, is the set of all objects that are a member of A, or B, or both. The union of {1, 2, 3} and {2, 3, 4} is the set {1, 2, 3, 4} .
#    Intersection of the sets A and B, denoted A ∩ B, is the set of all objects that are members of both A and B. The intersection of {1, 2, 3} and{2, 3, 4} is the set {2, 3} .
#    Set difference of U and A, denoted U \ A, is the set of all members of U that are not members of A. The set difference {1, 2, 3} \ {2, 3, 4} is {1}, while, conversely, the set difference {2, 3, 4} \ {1, 2, 3} is {4} . When A is a subset of U, the set difference U \ A is also called the complementof A in U. In this case, if the choice ofU is clear from the context, the notation Ac is sometimes used instead of U \ A, particularly if U is a universal set as in the study of Venn diagrams.
#    Symmetric difference of sets A and B, denoted A △ B or A ⊖ B, is the set of all objects that are a member of exactly one of A and B (elements which are in one of the sets, but not in both). For instance, for the sets {1, 2, 3} and {2, 3, 4} , the symmetric difference set is {1, 4} . It is the set difference of the union and the intersection, (A ∪ B) \ (A ∩ B) or (A \ B) ∪ (B \ A).
#    Cartesian product of A and B, denoted A × B, is the set whose members are all possible ordered pairs (a, b) where a is a member of A and b is a member of B. The cartesian product of {1, 2} and {red, white} is {(1, red), (1, white), (2, red), (2, white)}.

def qsort(L):
    if len(L) <= 1:
        return L
    
    pivot = random.choice(L)
    lh = [x for x in L if x < pivot]
    up = [x for x in L if x > pivot]
return qsort(lh) + ([pivot] * ) + qsort(up
