![](/ga_cog.png) 

# Coding Challenge

## Setting Up 

1. In today's morning_exercise folder, create a `consecutives.js` file 
1. Solve the problem below in that file

## Non-Consecutive Arrays

Write a function called `nonConsecutive` that takes an array as an argument and finds the _first_ element of that array that is not consecutive. Initially, treat consecutive to mean not exactly 1 larger than the previous element of the array. 

If there is a non-consecutive number, return the very first one 

If there is no non-consecutive number, return null

#### Assume: 

1. The array will always only be made of integers
1. The array will always have at least 2 elements 

#### Examples: 

```
nonConsecutive([1, 2, 3, 4])
// returns: null
```

```
nonConsecutive([1, 2, 4, 5, 7]) 
// returns: 4
``` 

## Bonus 

Finished the above task? Upgrade your function so that it takes 2 arguments. 

The first argument should be where the user can input an integer for their own meaning of consecutive. i.e. if I wanted to check if each consecutive element is larger by 2 or 3, etc. 

The second argument should be the array to check.

#### Examples: 

```
nonConsecutive(2, [1, 3, 5, 7]) 
// returns: null 
```

``` 
nonConsecutive(2, [1, 3, 5, 9]) 
// returns: 9
```
