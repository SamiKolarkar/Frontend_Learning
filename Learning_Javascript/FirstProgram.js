function sample(call) {
    call?.();
    console.log(">This is hello from sample function.");
    return;
}

console.log(">Hello World");
let x=10;
console.log(">Value of x is : ${x}");

var temp=null;

if (temp===null) console.log(true);
else console.log(false);

console.log(typeof temp+" "+typeof x);

var t=true;
if(t!=0) console.log(true+" "+t===0);
else console.log(false+" "+t!==0);

console.log(true);

sample(null);

console.log("1" in [1,2,3]);     //  Right hand side must be an object
console.log(1 in [1,2,3]);       //  Left hand side must be string (or) type can be converted to it.

let y=eval("4+5");
let v=10;

let u=eval; 
function unknown() {
    let x=eval("var z=3+5");
    console.log(z);
    u("v=1;");
}
unknown();
console.log(v);

sample_arr=[1,35,2];
for (let ele of sample_arr) {
    console.log(ele);
}

sample_obj={d:23, w:23, x:"sample"};
for (let [k, v] of Object.entries(sample_obj)) console.log(k+v);

for ([k, v] of Object.entries(sample_obj)) console.log(k);

for (let keys of Object.keys(sample_obj)) console.log(keys);

for (let values of Object.values(sample_obj)) console.log(values);

for (let property in sample_obj) console.log(">Key :",property,", Value :",sample_obj?.[property]);

console.log(sample_obj instanceof Object);

obj_values=[ 23, 23, 'sample' ]
console.log(obj_values);
console.log(2 in obj_values);


// Lexical Scoping
function outer1() {
    let username="Sham";
    function inner1() {
        console.log(">This is an example of lexical scoping from inner function...");
        console.log(username);
    }
    inner1();
}
outer1();


//Closure 
function outer2() {
    let username="Ram";
    function inner2() {
        console.log(username);
    }
    return inner2;
}
let myfunc=outer2();
myfunc();