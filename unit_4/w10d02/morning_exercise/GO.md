# Language Bonanza - GO

## Lesson Objectives

-   Interpreted vs Compiled Languages
-   Using REPL.it to learn a new language
-   Data Types and Conditionals in the GO Programming Language
-   Loops and Functions in GO

### Interpreted vs Compiled Languages

Languages like Javascript, Python and Ruby are "Interpreted Languages" and are usually turned into machine readable code by an interpreter when the code is run, so any errors in the code will create "Runtime Errors". For example, Javascript when it is run in the Google Chrome Browser or by Node it is being interpreted by the Google's V8 Javascript engine.

Languages like Crystal, Rust, and Go are compiled languages and first must be compiled into an executable file before they can be run. So errors usually show up during the compilation process and are called "Compile Time Errors" so there are very few to no run-time errors since the code won't complete compilation unless all errors are addressed, making it rare that the end user sees errors beyond bugs created by bad logic.

### REPL.it

REPL.it is website that allows you to generate a runtime for almost any programming language in the browser. This is a great tool for learning and trying out different programming languages to improve your portfolio of skills.

If you don't already have a REPL.it account, please take a moment and create one now.

# The GO Programming Language

From the GO Documentation

```
The Go programming language is an open source project to make programmers more productive.

Go is expressive, concise, clean, and efficient. Its concurrency mechanisms make it easy to write programs that get the most out of multicore and networked machines, while its novel type system enables flexible and modular program construction. Go compiles quickly to machine code yet has the convenience of garbage collection and the power of run-time reflection. It's a fast, statically typed, compiled language that feels like a dynamically typed, interpreted language.
```

## Let's code!

### Setup

1. Go to your REPL.it account and create a new REPL
2. Select the GO Programming Language

### Hello World

First let's do the customary maiden voyage for any programming language with hello world. The syntax for GO is meant to be very similar to ruby making it very easy to pick up if you've used ruby before.

```
package main

import "fmt"

func main() {
	fmt.Println("Hello World")
}
```

### Data Types

Go variables are generally statically typed but you can dynamically type variables using ":=" for assignment. Types declarations follow the syntax of "var name type". Use const in place of var for constant declarations.

```
package main

import "fmt"

func main() {

	a := 1

	b := "Hello"

	c := true

	var d string

	d = "World"

	fmt.Println(a, b, c, d)
}
```

#### Zero

variables declared without a value are given default 0 values of false, 0 and ""

#### Boolean

A Bool type variable can hold either **true** or **false**

#### Integer

Whole numbers like 1 and 2

#### Float

Numbers with a decimal place like 5.65 and 4.42

#### String

A collection of characters such as "hello there"

#### Arrays

An indexed collection of a set type and size, they cannot be reset in size once declared.

```
package main

import "fmt"

func main() {
	var myArr [3]int
	myArr[0] = 1
	myArr[1] = 2
	myArr[2] = 3
    fmt.Println(myArr)

	myArr2 := [3]int{1,2,3}
	fmt.Println(myArr2)
}
```

#### Slices

Slices are pointers/references to dynamically sized arrays, they essentially work the way arrays work in javascript. To make a slice don't specify a size when creating an array. You make slices from existing arrays, keep in mind modifying the slice of an array will modify the original array.

```
package main

import "fmt"

func main() {
	var myArr [3]int
	myArr[0] = 1
	myArr[1] = 2
	myArr[2] = 3
	mySlice := myArr[0:3]
    fmt.Println(mySlice)

	mySlice2 := []int{1,2,3}
	fmt.Println(mySlice2)
}
```

#### map

Key Value pairs where all the keys are of the same type and all of the values are of the same type. Declaration syntax is map[keyType]valueType

```
package main

import "fmt"

func main() {

var m = map[string]int{
"age": 34,
"eyes": 2,
}


fmt.Println(m)


}
```

#### Structs

Allow you to define bundles of properties of varying types.

```

package main

import "fmt"

func main() {

type Dog struct {
name string
tail bool
legs int
}

var spot Dog = Dog{"Spot", true, 4}

fmt.Println(spot)
fmt.Println(spot.name, spot.tail, spot.legs)


}

```

### Conditionals

#### if

the syntax for if statements is the following:

```
package main

import "fmt"

func main() {

	myVar := "foo"

	if myVar == "foo" {
		fmt.Println(myVar)
	} else {
		fmt.Println("boo")
	}
}

```

#### Switch

These work like switch statements in javascript test data against several possible cases. The biggest difference is the break for each case is implied.

```
package main

import (
	"fmt"
)

func main() {

	myVar := 2

	switch myVar {

	case 1:
	fmt.Println("1")

	case 2:
	fmt.Println("2")

	default:
	fmt.Println("3")
	}


}
```

### Loops

#### for

in go there are only for loops similar to the for loops in javascript. The only required portion is the middle expression.

```
package main

import "fmt"

func main() {

	for i:=0;i<5;i++ {
		fmt.Println(i)
		}

	loop2 := 0

	for ;loop2<5;loop2++{
		fmt.Println(loop2)
		}

	loop3 := 0

	for ;loop3 < 5; {
		fmt.Println(loop3)
		loop3++
		}
}

```

### functions

In Go, functions use the func keyword and require all parameters and returns values be typed.

Function with no parameters or return value

```
package main

import "fmt"

func helloWorld() {
	fmt.Println("Hello World")
}

func main() {
	helloWorld()
}
```

Function with one Parameter and return values

```
package main

import "fmt"

func helloWorld(x string)string {
	return x
}

func main() {
	fmt.Println(helloWorld("hello world"))
}
```

Function with two parameters of the same type and return value

```
package main

import "fmt"

func helloWorld(x,y string)string {
	return x + y
}

func main() {
	fmt.Println(helloWorld("hello ", "world"))
}

```

## Practice Time

-   feel free to search for more information such as how to determine the length of a data collection or how to iterate over them.

Attempt to do the following on your own:

1. assign a integer to a variable and print it to the console

2. assign a string to a variable and print it to the console

3. write an if statement that runs if a variable called myVar is greater than 5, test it out with different Numbers

4. Write an if statement that runs if a variable called myVar isn't greater than 5 and test it out with different Numbers and have it print something else if the expression is false. (else)

5. write a switch statement with at least 2 cases and test them out

6. create an array with 5 elements and use a for loop to print each of its values

7. create a map with at least 3 properties and print one of its properties to the console

8. create an struct with 5 properties, create an instance of the struct and print its properties to the console.

9. create a function that takes 2 numbers as arguments and adds them

10. create a function that takes 2 numbers as arguments and subtracts them

11. create a function that takes 2 strings and concatenates them
