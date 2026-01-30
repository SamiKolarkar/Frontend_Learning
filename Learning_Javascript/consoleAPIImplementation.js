console.group(); ///Provides indentation indicating similar group
console.groupCollapsed("Collapse"); ///Provides display collapsing feature in browsers

console.log(">This is used to print anything on console...");
console.trace(">This is used to print stack trace...");
console.assert(true, "Does noting if assertion is true");
console.assert(false, "If assertion is false it prints the message using error stream with assertion failed...");
console.clear();
let l1=[2,5,26,2];
console.table(l1);

let temp="Sample";
console.log(temp);
console.log(temp);
console.count(temp);
console.countReset(temp);

console.debug(">Error message using error stream");
console.error(">Error message using error stream");
console.info(">Error message using error stream");

console.time(temp); ///Keeps in mind time when it is called & Prints nothing
console.timeLog(temp);
console.timeEnd(temp);


console.groupEnd();