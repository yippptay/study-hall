#//////////////////////////////
# Assigning Variables and Types
#//////////////////////////////

# a = 5
# b = "Hello World"
# print(a, b)



#//////////////////////////////
# Working with Strings
#//////////////////////////////

# c = "Hello"
# d = "World"
# #concatenation
# print(c + " " + d )
#
# #interpolation
# print(f"{c} {d}")




#//////////////////////////////
# Conditionals & Loops
#//////////////////////////////

# if False:
#     print("This is true")
# else:
#     print("this is false")

# counter = 0
# maxLoops = 10
#
# while counter < maxLoops:
#     print (counter)
#     counter += 1

# myList = [1 , 2, 3, 4, 5, 6, 7]
#
# for num in myList:
#     print(num)


#//////////////////////////////
# Lists[], Tuples(), Sets{}, and Dictionaries{}
#//////////////////////////////

# LIST => indexed, duplicates are allowed, mutable
# myList = [1,2,3,4,5,6,7]
#
# print(myList[3])
# print(len(myList))
# print(myList[-1])
#
# # TUPLE => indexed, duplicates are allowed, immutable
#
# myTuple = (1,2,3,4,5,6,7)
#
# print(myTuple[3])
# print(len(myTuple))
# myTuple[4] = 9

# SETS => no duplicates, iterable

# mySet = {1,2,3,4,5,5,5,6,6,6,7}
# print(mySet)
# for num in mySet:
#     print(num)
# print(len(mySet))
#
# # Dictionaries => key value pairs
#
# person = {"Name": "Alex Merced", "Age": 34}
# print(len(person))
# print(person["Name"])

#//////////////////////////////
# Functions def (): and Lambdas -> lambda parameters:expression
#//////////////////////////////

# def HelloWorld():
#     print("Hello World")
#
#
# HelloWorld()
#
# def add(x,y):
#     return x + y
#
#
# print(add(5,7))
#
# myLambda = lambda x,y: x+y
# print(myLambda(5,5))




#//////////////////////////////
# Classes class/__init___/self and inheritance class child(parent):
#//////////////////////////////

# class Dog:
#
#     def __init__(self, name):
#         self.name = name
#
#
#     ears = 2
#     legs = 4
#     def bark(self):
#         print(f"{self.name} stands on {self.legs} legs and barks")
#
# class SmallDog(Dog):
#
#     def hopInPurse(self):
#         print(f"{self.name} hops into your purse")
#
# Sparky = Dog("Sparky")
# print(Sparky.ears)
# Sparky.bark()
#
# Spot = Dog("Spot")
# Spot.bark()
#
# Mittens = SmallDog("Mittens")
# Mittens.hopInPurse()
# Mittens.bark()




#//////////////////////////////
# Working with Files
#//////////////////////////////
# x = create || w = write || a = append || r = read
# open(), .read, .write, .close, .readline

# myFile = open('myFile.txt', 'r')
#
# contents = myFile.read()
#
# print(contents)
#
# myFile.close()



#//////////////////////////////
# Modules (import) and Packages(__init__.py)
#//////////////////////////////

import myModule.function as func

func.myFunction()



