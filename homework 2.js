

// ex 1 

let a = -14;
let b = 5;
let c = 0;
if(a === 0 || b === 0 || c === 0){
    console.log('unsigned'); 
} else if ((a < 0 && b < 0 && c >0) || (a > 0 && b < 0 && c < 0) || (a < 0 && b > 0 && c > 0)) {
    console.log('+');
} else if ((a > 0 && b > 0 && c < 0) || (a < 0 && b > 0 && c > 0 ) || (a > 0 && b < 0 && c <0 )) {
    console.log('-');
}




// ex 2 

let a = 5;
let b = 2463;
let lastDigit;
while(b > 0){
    lastDigit = b % 10;
    if(lastDigit === a){
        console.log('Yes');
        break;
    }
b = Math.floor(b/10);
}
if(lastDigit != b) {
    console.log('No');
}




// ex 3

let b = 895796;
 b += "";
if (b.length === 1) {
    console.log(b);
} else if (b.length === 2 ) {
    console.log(b[1] + b[0]);
} else if (b.length){
    console.log(b[b.length - 1] + b.slice(-5, -1) + b[0]);
}




// ex 4

let a = 45;
let b = 26;
let c = 78;
if(a > b && b < c){
    console.log(b, a , c);
}else if (a < b && b > c){
    console.log(a, b ,c );
}else if(b < c && a > c){
    console.log(b, c, a);
}else if (a > c && c < b){
    console.log(c, b , a);
}else
  {

}










// ex 5 

let a = 1;
let b = 2;
let c = 1;
let result = b * b - 4 * a * c;
if(result > 0){
  result1 = (-b + Math.pow(result, 5)) / (2 * a);
  result2 = (-b - Math.pow(result, 5)) / (2 * a);
}else if(result===0){
  result1 = -b / (2 * a);
  console.log('Solution is' + result1);
}else{
  console.log('Tge equation has no real roots');
}






// ex 6


let n = +prompt();
let i = 0;
let j = 0;
if((n % 2 === 0) && (! Math.floor(n / 10))){
  i += 1 ;
}
if((n % 3 === 0) && (n % 10 === 1)){
  j += 1;
}





// ex 7


let figureName = prompt('Please choose figure name , trangle or rectangular?');
if(figureName === 'triangle'){
    let a =+prompt('Write height of the triangle');
    let b =+prompt('Write base of the triangle' );
    if(a === 0 || b === 0){
        alert('Please enter only positives');
    }else if(a > 0 && b > 0){
        alert(`Square of the triangle is ${(a * b)/2}`);
    }
}else if (figureName === 'rectangular'){
    let x =+prompt('Write length of the rectangular');
    let y =+prompt('Write width of the rectangular');
    if(x === 0 || y === 0){
        alert('Please enter only positives');
    }else if(x > 0 && y > 0){
        alert(`Square of the rectangular ${(x * y)}`);
    }else{
        alert('Please enter only positives');
    }
}




// ex 8

 
let n1 = 4593653;
let myArr = [];
let sorted = [];
let ind = 0;
let answer = 0;
let qarord, mnacord = 0;
qanord = n1;
if(qanord <= 9){
    answer = 0;
    myArr[ind] = qanord;
}else{
while(qanord >=0){ 
mnacord = qanord % 10;
myArr[ind] = mnacord;
qanord =  Math.floor(qanord/10);
if(qanord == 0){
    
     sorted = myArr.sort();
     
        console.log(sorted[sorted.length - 1] - sorted[0]);

        break;
}else{
    ind += 1;
   
}
}
}


