function addMatrices(a, b) {
    for (let i=0;i<a.length;i++) {
        for (let j=0;j<b.length;j++) {
            a[i][j]=a[i][j]+b[i][j];
        }
    }
}
function display(temp) {
    for (let i=0;i<temp.length;i++) {
        let t="";
        for (let j=0;j<temp[i].length;j++) {
            t+=temp[i][j]+" ";
        }
        console.log(t);
    }
}
a=[[1, 2], [3, 4]]
b=[[2, 3], [5, 6]]
console.log(">Matrix a : ");
display(a); 
console.log(">Matrix b : ");
display(b);
addMatrices(a, b);
console.log(">After addition : ");
display(a);