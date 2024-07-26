// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

const arr = [1,2,3,4,5,5,2];

let arrays = [];

for(i = 0; i < arr.length; i++){
    if(arr[i]===arr[i+1]){
        arrays.push(arr[i]*2);
        i++;
        arrays.push(arr[i])
    }
    else{
        arrays.push(arr[i]*2)
    }
}
console.log(arrays)