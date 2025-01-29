const arr1=[1,2,3,4,5,6,7,8]
const arr2=new Array('Prince','Pawan',10,12)

// console.log(arr1);
// console.log(arr2);

// console.log(arr2[0]);

// arr1.push(55)             // add 55 to the end of the   array
// console.log(arr1); //


// arr1.pop()
// console.log(arr1); //  remove 55 from the end of the array

// arr1.unshift(0)
// console.log(arr1); //  add 0 at the beginning of the array

// arr1.shift()
// console.log(arr1); //  remove 0 from the beginning of the array


// const newarr=arr1.join()    //this method will change the array elemnt type to String
// console.log(newarr);


const new1=arr1.slice(0,5)      //  this will return a new array from index 0 to 5
console.log("A",arr1);

console.log(new1); 

const new2=arr1.splice(0,5); // this will manipulate the original array and remove element from 0 to 5 from original array
console.log("B",arr1);
console.log(new2);
