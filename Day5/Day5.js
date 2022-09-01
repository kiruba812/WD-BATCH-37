// Anonymous functions

// Print odd numbers in an array

let nums = [1, 2, 4, 5, 3, 7, 8, 10, 9, 12,]

function num() {
    let odd = nums.filter((oddnum) => oddnum % 2 !==0);
    console.log(odd);
};
num()


// Convert all the strings to title caps in a string array

let firstname ="gokul";
let lastname ="pradap";
function caps() {
    let fullname = firstname+lastname;
    let result = fullname.toUpperCase();
    console.log(result);
};
caps()

// Sum of all numbers in an array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function total() {
 let sum = 0;
 for (let i = 0; i < array. length; i++) { 
      sum += array[i];
     }
 console.log(sum);
};
total()

// Return all the prime numbers in an array\

var arr = [1,2,5,9,11,3,7,22, 56, 3, 56, 4, 343, 68, 56, 34, 87, 8, 45, 34];
var isPrime = function(n){
   if (n===1){
   return false;
   }else if(n === 2){
      return true;
   }else{
      for(let x = 2; x < n; x++){
         if(n % x === 0){
            return false;
         }
      }
      return true;
   }
}
var filterPrime = function(arr) {
   //const filtered = arr.filter(el => !isPrime(el));
  let filtered = [];
  for(let i=0;i<arr.length;i++){
		if(!isPrime(arr[i])){
    	filtered.push(arr[i]);
    }
  }
  return filtered;
}
console.log(filterPrime(arr));


// Return all the palindromes in an array


var arr = ['carecar', 1344, 12321, 'did', 'cannot'];
var isPalindrome = function(el) {
  const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
var result=[];
var findPalindrome = function(arr) {
	for(let i=0;i<arr.length;i++){
  	if(isPalindrome(arr[i])){
    	result.push(arr[i]);
    }
  }
}
findPalindrome(arr);
console.log(result)





// Return median of two sorted arrays of same size

function getMedian(ar1, ar2, n)
{
	var i = 0; 
	var j = 0; 
	var count;
	var m1 = -1, m2 = -1;
	for (count = 0; count <= n; count++)
  	{
		if (i == n)
		{
			m1 = m2;
			m2 = ar2[0];
			break;
		}
		else if (j == n)
		{
			m1 = m2;
			m2 = ar1[0];
			break;
		}
		if (ar1[i] <= ar2[j])
		{
			m1 = m2;
			m2 = ar1[i];
			i++;
		}
		else
		{
			m1 = m2;
			m2 = ar2[j];
			j++;
		}
	}
	return (m1 + m2)/2;
}
var input1 = [1, 12, 15, 26, 38];
var input2 = [2, 13, 17, 30, 45];
var n1 = input1.length;
var n2 = input2.length;
if (n1 == n2){
	console.log( getMedian(input1, input2, n1));
  }
else{
	console.log("Doesn't work for arrays of unequal size");
};

//remove dupilicate from array
let arrays = [1, 1, 4, 4, 5, 6, 9, 9, 8]
let removeDup = arr => [...new Set(arr)];
console.log(removeDup(arrays))


// Rotate an array by k times
var result = [];
rotateArray = function(a, n, k)
{
	k = k % n;
	for (let i = 0; i < n; i++) {
		if (i < k) {
			result.push(a[n + i - k] );
		}
		else {
			result.push(a[i - k]);
		}
  
	}
}
let input = [1, 2, 3, 4, 5];
let N = input.length;
let K = 3;
rotateArray(input, N, K);
console.log(result);

// IIFE functions
(function() {
    let nums = [1, 2, 4, 5, 3, 7, 8, 10, 9, 12,]
    let odd = nums.filter((oddnum) => oddnum % 2 !==0);
    console.log(odd);
})();


(function() {
    let fullname = "Gouklpradap";
    let result = fullname.toUpperCase();
    console.log(result);
})();



(function() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 let sum = 0;
 for (let i = 0; i < array. length; i++) { 
      sum += array[i];
     }
 console.log(sum);
})();



(function(){
    let arrays = [1, 1, 4, 4, 5, 6, 9, 9, 8]
    let removeDup = arr => [...new Set(arr)];
    console.log(removeDup(arrays))
    })();



// var arr = [1,2,5,9,11,3,7,22, 56, 3, 56, 4, 343, 68, 56, 34, 87, 8, 45, 34];
// var isPrime = function(){
//    if (n===1){
//    return false;
//    }else if(n === 2){
//       return true;
//    }else{
//       for(let x = 2; x < n; x++){
//          if(n % x === 0){
//             return false;
//          }
//       }
//       return true;
//    }
// }
// var filterPrime = function(arr) {
//    //const filtered = arr.filter(el => !isPrime(el));
//   let filtered = [];
//   for(let i=0;i<arr.length;i++){
// 		if(!isPrime(arr[i])){
//     	filtered.push(arr[i]);
//     }
//   }
//   return filtered;
// }
// console.log(filterPrime(arr));


var arr = ['carecar', 1344, 12321, 'did', 'cannot'];
var isPalindrome = function(el) {
  const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
var result=[];
var findPalindrome = function(arr) {
	for(let i=0;i<arr.length;i++){
  	if(isPalindrome(arr[i])){
    	result.push(arr[i]);
    }
  }
}
findPalindrome(arr);
console.log(result)


function getMedian(ar1, ar2, n)
{
	var i = 0; 
	var j = 0; 
	var count;
	var m1 = -1, m2 = -1;
	for (count = 0; count <= n; count++)
  	{
		if (i == n)
		{
			m1 = m2;
			m2 = ar2[0];
			break;
		}
		else if (j == n)
		{
			m1 = m2;
			m2 = ar1[0];
			break;
		}
		if (ar1[i] <= ar2[j])
		{
			m1 = m2;
			m2 = ar1[i];
			i++;
		}
		else
		{
			m1 = m2;
			m2 = ar2[j];
			j++;
		}
	}
	return (m1 + m2)/2;
}
var input1 = [1, 12, 15, 26, 38];
var input2 = [2, 13, 17, 30, 45];
var n1 = input1.length;
var n2 = input2.length;
if (n1 == n2){
	console.log( getMedian(input1, input2, n1));
  }
else{
	console.log("Doesn't work for arrays of unequal size");
};


//Arrow Function

(() => {
    let nums = [1, 2, 4, 5, 3, 7, 8, 10, 9, 12,]
    let odd = nums.filter((oddnum) => oddnum % 2 !==0);
    console.log(odd);
})();


(() => {
    let fullname = "Gouklpradap";
    let result = fullname.toUpperCase();
    console.log(result);
})();


(() => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 let sum = 0;
 for (let i = 0; i < array. length; i++) { 
      sum += array[i];
     }
 console.log(sum);
})();



(() => {
    let arrays = [1, 1, 4, 4, 5, 6, 9, 9, 8]
    let removeDup = arr => [...new Set(arr)];
    console.log(removeDup(arrays))
    })();

