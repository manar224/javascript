function REVERSESTRING(str){
return str.split("").reverse("").join("");
}
reverse_string=REVERSESTRING("manar");
console.log(reverse_string);



function FACTORIAL(NUM){
    if (NUM === 0 || NUM === 1) {
        return 1;
      } else {
        return NUM * FACTORIAL(NUM - 1);
      }
}
fac=FACTORIAL(5);
console.log(fac);



function MERGEOBJECTS(OBJ1,OBJ2){
return { ...OBJ1 , ...OBJ2};
}
object1={a:1 , b:2 , c:3};
object2={a:5 , c:12 , d:10};
mergeobject=MERGEOBJECTS(object1,object2);
console.log(mergeobject);


function TOGGLEBOOLEAN(BOOL){
    return !BOOL;
}
result=TOGGLEBOOLEAN(true);
console.log(result);


Array=[1,2,3,4,5];
function CALCULATESUM(NUMBERS){
return NUMBERS.reduce((accumulator, currentValue) => accumulator + currentValue );
}
sumofarray=CALCULATESUM(Array);
console.log(sumofarray);

function MAXIMUM(NUMBERS){
return Math.max(...NUMBERS);
}
maxnumber=MAXIMUM(Array);
console.log(maxnumber);

function MINIMUM(NUMBERS){
return Math.min(...NUMBERS);
}
minnumber=MINIMUM(Array);
console.log(minnumber);

function COUNTEVENODD(NUMBERS){
return NUMBERS.reduce((counts, num) => {
    if (num % 2 === 0) {
      counts.even += 1;
    } else {
      counts.odd += 1;
    }
    return counts;
  },
  { even: 0, odd: 0 }
);
}
countevenodd=COUNTEVENODD(Array);
console.log(countevenodd);


function GENERATEREPORT(NUMBERS){
    sumofarray=CALCULATESUM(Array);
    maxnumber=MAXIMUM(Array);
    minnumber=MINIMUM(Array);
    countevenodd = COUNTEVENODD(Array);
    return "Array Report:\n- sum: " + sumofarray + "\n- maximum: " + maxnumber+ "\n- minimum: " + minnumber+"\n- even,odd numbers: "+countevenodd;
}
report=GENERATEREPORT(Array);
console.log(report);

function Main(){
    Array=[1,2,3,4,5];
    report=GENERATEREPORT(Array);
    console.log(report);
}
Main();