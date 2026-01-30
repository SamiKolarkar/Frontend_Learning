let r1=new RegExp("s+");
let r2=/s+/;
console.log(r2.test("Today is sunday..."));
let r3=/\b[Jj]ava[Ss]cript\b/;
console.log("JavaScript".match(/\b[Jj]ava[Ss]cript\b/));
console.log("One of the most famous scripting language for web dev is JavaScript".search(r3));
console.log("One of the most famous scripting language for web dev is JavaScript".replace(/[Jj]ava[Ss]cript/, "javascript"));
for (let word of "One of the most famous scripting language for web dev is JavaScript. Javascript is more famous for its dynamic nature and web support.".matchAll(new RegExp(/[Jj]ava[Ss]cript/g))) console.log(word);

console.log("One of the most famous scripting language for web dev is JavaScript. Javascript is more famous for its dynamic nature and web support.".match(/[Jj]ava[Ss]cript/imgus));


///Using RegExp Class
let rgep1=new RegExp("\\d{5}", "g"); ///'\' is used extra to represent \d
console.log(rgep1.test("41300"));
let res=rgep1.exec("41300");
console.log(res);