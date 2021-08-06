//example of array
var a = [1,2,3,4,5,6,7];
console.log("a: ", a);


//array holding different data types
var b = [1, "Adam", true];
console.log("b: ", b);
console.log("accessed element of b: ",b[1]);

//array holding a list of arrays (arrays inside array)
var c = [[1,3], [2,4], [8,5], [9,7]];
console.log("c: ",c);
console.log("accessed element of c: ", c[0][1]);



//slice Removal

var d = [12, 45, 67, 24, 76];
console.log("d: ",d);

//removing the elements 
/*splice removal takes the 1st argument as the position (index) and the 
2 argument as the number of elements to be removed from the position towards right 
taking the position to be the 1st element to be removed and thereafter move right*/
d.splice(1,3);
console.log("new array after removal: ", d );


//splice addition

var e = [19, 78, 56, 43, 23,90]
console.log(" e : ", e);

/*
splice addtion takes 1st argument as the position (index) and the 
2nd argument as the no of elements to be removed and from the position towards right and 
3rd argument is the element that needs to be added post the position.

*/
e.splice(2,0,"red", "pink");
console.log("e addtion: ", e);


//splice replacement.

var f = [20, 40, 50, 80, 100, 30];
console.log(" f : ", f);


f.splice(3,2, "hello", "hi");
console.log("f after replacement: ", f)












