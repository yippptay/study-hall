#ask the user do they want to add or view students
#if they choose view it will display students
#if they choose add it will ask for name and email and add student to list
#if they choose quit, it will quit the program

students = [] #List of Students

while(True):
    start = input("What would you like to do? (add, view, save, load or quit) ")

    if start == "view":
        for student in students:
            print("---------------")
            print(student["name"])
            print(student["email"])
            print("---------------")

    if start == "add":
        name = input("What is the students name? ")
        email = input("What is the students email?")
        newStudent = {"name": name, "email": email}
        students.append(newStudent) #add the new student to the list

    if start == "save":
        savefile = open("students.txt", "w")

        for student in students:
            savefile.write(f"{student['name']}\n")
            savefile.write(f"{student['email']}\n")

        savefile.close()

    if start == "load":
        loadfile = open("students.txt", "r")

        while True:
            name = loadfile.readline()
            email = loadfile.readline()
            if (name and email):
                newStudent = {"name": name, "email": email}
                students.append(newStudent)
            else:
                break

        loadfile.close()



    if start == "quit":
        break
