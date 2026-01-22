let fruits =["apple","banana"];
let newLength = fruits.push("cherry");
console.log(fruits)
console.log(newLength)
//reverse the array by using push and pop.
let num =[1,2,3,3,4,5];
let rev =[];
while(num.length>0){
    rev.push(num.pop());
}
console.log(rev)
//remove all negative numbers from an array and print positive integers.
let array = [1,2,3,-3,-2,-1];
let positive = [];
while(array.length>0){
    let posnum = array.pop()
    if(posnum>0){
        positive.unshift(posnum)
    }
}
console.log(positive)
// check one array is pallindrome or not.

function pallindrome() {
let arr = [1,2,3,3,2,1];
let original =[];
let reverse =[];
for(let i=0;i<array.length;i++){
    original.push(arr[i]);
}
while (arr.length>0){
    reverse.push(arr.pop())
}
for(i=0;i<original.length;i++){
    if(original[i]!== reverse[i]){
        return"not a pallindrome"
        }
    }
    return"pallindrome"
}
console.log(pallindrome())

//q.1. remove all the duplicate element from the array?
//q.2. split even and odd numbers from a given array?
//q.3. move all zeroes to the end of the array[2,0,3,0,6,8,9] result [2,3,6,8,0,0] should be like this.

