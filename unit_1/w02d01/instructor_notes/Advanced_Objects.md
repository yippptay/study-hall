# Advanced Objects

### Lesson Objectives

-   Revisiting Object Basics
-   Learning more advanced Object Topics

## Setup

1. Navigate to the `student_examples` folder for today.
2. Create a file called `advanced_objects.js` to use for practice code.
3. Open it in your text editor. Add a console log and run your code to confirm that you can see the output in your terminal.

<hr>

## Object Methods

3 Ways to define Object methods

```
const obj1 = {
  hello: () => console.log('hello world')
}

obj1.hello()
```

```
const obj2 = {
  hello: function(){
    console.log('hello world')
  }
}

obj2.hello()
```

```
const obj3 = {
  hello (){
    console.log('hello world')
  }
}

obj3.hello()
```

## Testing whether properties exist

```
const myArr = [
    { name: 'Alex Merced', age: 34 },
    { name: 'Arthur Bernier' },
    { name: 'Jerrica Bobadilla' },
    { name: 'Ayla Ex'}
];

for (person of myArr) {
    console.log(person.name);
    person.age ? console.log(person.age) : null;
}
```

## Other Object Topics

-   Objects as switch statements
-   Object.keys, Object.values, Object.entries
-   Maps (Bonus)
-   Composition (Bonus)
