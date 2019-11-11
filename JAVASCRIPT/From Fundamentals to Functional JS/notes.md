# objects

* Object best practices

 dots notation is more powerful than brackets notation, dots only for strings but brackets notation is for strings, weird characters,expression, variables and numbers.

 Please do *Elaborate* storing data
 Iteration for in loop

* Arrays

 array is a object which is an important concept => same as object behaviour

 ```javascript
    var box = [];
    box['size'] = 9;
    box['0'] = 'max';
    box['size']; // 9
    box[0]; // 'max'

    box['length']; // 2

    var box1 = [];
    box['0'] = 'max';
    box[1] = {'babyBox': true};

    box[length];
 ```

 array the rules doesn't change, please use it.

* Functions
 Function anatomy: it can use functions for encapsulation. The functions are objects. please pay attention to invocation operator = two parentheses, function is a union of action that can be run.

 1. how to use return to jump out loop. return false; => break; return true; => continue

 2. use arguments key words, how to use arguments numbers to over-ride functions. arguments is an array like object, so do not have the array functions, such as arr.slice(a,b)

 3. function as a constructors => return a object

 4. 