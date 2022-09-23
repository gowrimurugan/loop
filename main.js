let num = prompt ("Enter The Number") ;
let temp = num;
p = 0;
x = 0;
while (temp!=0) {
    let lastDigit = temp % 10;
    p = p + 1;
    temp = Math.floor(temp / 10);
}
temp =  num;
while (temp != 0) {
    lastDigit = temp % 10;
    x = x +(lastDigit ** p);
    temp = Math.floor(temp / 10);
}
if ( x == num){
    console.log(num + "is an amtrong number");
}else {
    console.log(num + "is not an amstrong number");
}