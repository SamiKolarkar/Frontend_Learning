let o1={
    1: "Sam",
    23: 232.21
};
//let json1=JSON.stringify(o1, null, "s");
//console.log(json1);
//let o2=JSON.parse(json1);
//console.log(o2 instanceof Object);
//console.log(o2);

let json2=JSON.stringify(o1, function(key, value){
    (key instanceof Number)?undefined:value;
}, "s");
console.log(json2);
o1.currDate=(new Date(Date.now())).toUTCString();
console.log(o1.currDate);
let o3=JSON.parse(JSON.stringify(o1), function(key, value) {
    if (value instanceof String) {
        return (new Date(value)).toUTCString;
    } else return value;
});
console.log(o3);