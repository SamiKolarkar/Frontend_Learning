let d1=new Date();
let d2=new Date(2004, 11, 23, 10, 0, 0, 1232);
console.log(d1, " ", d2);
console.log(d2.getDate(), d2.getDay(), d2.getFullYear(), d2.getMonth(), d2.getHours(), d2.getMilliseconds(), d2.getMinutes());
d2.setFullYear(2003);
console.log(d2);
console.log(d2.toString());
console.log(d2.toLocaleString());
console.log(d2.toLocaleTimeString())
console.log(d2.toDateString());
console.log(d2.toUTCString());
d2.setTime(d2.getTime()+30000);
console.log(d2);

console.log((new Date(Date.UTC(2005, 12, 1)).toDateString()));