let a=[];     //An empty array

let b=[1, 3, 6, ...a]; //Declaring array with intialization

let c=new Array() //Using array constructor creating [] array
c=new Array(10) //Creating array of size 10
c=new Array(1, 4, ...b) //Creating array with some predefined values in it.
console.log(c["0"], " ", c[0])
///Since single element array cannot be created using Array() constructor
///So, we use Array.of()
c=Array.of(10)
console.log(c);

let obj=new Set(["Sam", 10.3]);
c=Array.from(obj);
console.log(c);

/* NOTE:- Negative indexing is not allowed because it is internally treated as 
          array property (or) element.*/

console.log(c.length);
delete c[1] ///Only indexes are allowed like property names in objects
console.log(c);

d=new Array(10);
for (let i=0;i<5;i++) {
    let temp=new Array(i+1);
    d[i]=temp;
}
console.log(d);


let sample1=[2, 5, 1, 61, 6, 16]
sample1[10]=23;
console.log(">Exmaple of adding element after array becomes full : ",sample1);
let sample2=["sam", "sm", 23.5];
console.log(sample1.concat(1,33,4,54));
console.log(sample1.concat([2,45,21]));
console.log(sample1.concat([2, [42, 4]], 3));
sample1.sort();
console.log(sample1);
console.log(sample1.reverse())

console.log([325, [435, [53]]].flat());
let temp2=[325, [435, [53]]].flat(2);
temp2.push(10); temp2.pop();
temp2.unshift(28); 
console.log(temp2.shift());
console.log(sample1["Sam"]);
console.log(sample1[100]);
console.log(sample1.length);

sample1.push(obj);
console.log(sample1.includes(obj));
console.log(obj in sample1)
console.log(sample1);
sample1.sort((a, b)=>Number(a)-Number(b));
console.log(sample1);

let temp=[61, 6, 23, 2, 16, 1];
console.log(temp.sort((a, b)=>a-b));