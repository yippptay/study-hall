#//////////////////////////////
# range() - generate iterable of numbers up to argument
#//////////////////////////////

# onethrougheight = range(9) #generate a range of numbers up to the number 8
#
# print(onethrougheight)
#
# for num in onethrougheight:
#     print(num)

#//////////////////////////////
# generator expression - function( expression for i in range())
#//////////////////////////////

# x = [i * i for i in range(10)] #multiply each number in the range by itself and add it to the list []
#
# print(x)


#//////////////////////////////
# zip() - take multiple lists and make one list of tuples
#//////////////////////////////

# names = ["Alex Merced", "Claudio Sanchez", "Freddie Mercury", "Bob Hope"]
# emails = ["alex@alex", "claudio@claudio", "Freddie@Freddie"]
#
# together = [*zip(names, emails)]
#
# for person in zip(names, emails):
#     print (person)
#
# print(together)

# "*" same as spread operator for lists, tuples, zips, ranges, sets
# "**" is the same as the spread operator for dictionaries

#//////////////////////////////
# Swapping Values - x, y = y, x
#//////////////////////////////

# a, b, c = 1, 2, 3
# print(a,b, c)
#
# a, b, c = c, b, a
# print(a,b,c)

#//////////////////////////////
# Slices - List[:]
#//////////////////////////////

# myList = [1,2,3,4,5,6,7,8,9]
#
# mySlice = myList[3:8] #make a slice of index 3 up to but not including index 8
#
# print(mySlice, myList)
#
# mySlice[2] = 77
#
# print(mySlice, myList)

#//////////////////////////////
# Splat Operator - [*set]
#//////////////////////////////

# listone = [1,2,3]
# listtwo = [4,5,6]
#
# listcombined = [*listone, *listtwo] # "*" unpacks the individual lists into the new list
# print(listcombined)
#
# dictone = {"Name": "Alex Merced"}
# dicttwo = {"Age": 34}
#
# combineddict = {**dictone, **dicttwo} # "**" unpacks the dictionaries into the new dictionary
# print(combineddict)

#//////////////////////////////
# *args and **kwargs
#//////////////////////////////

# def HelloList (greeting, *args):
#     print(greeting)
#     for arg in args:
#         print(arg)
#
# HelloList("Hello", 1, 2, 3, 4, 5, 6, 7, 8)
#
# def meatandcheese(**kwargs):
#     print(kwargs["meat"])
#     print(kwargs["cheese"])
#
# meatandcheese(cheese="gouda", meat="steak")





#//////////////////////////////
# decorators @decorator
#//////////////////////////////

def decorate (func):
    def decorated (*args, **kwargs):
        print("--------------")
        func(*args, **kwargs)
        print("--------------")
    return decorated

@decorate
def message (message):
    print(message)


message("Hello World")