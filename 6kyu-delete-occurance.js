//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

//2 2022/04/24 10:47am
//1 2022/04/23



//3 2022/04/24 1:03pm 
function deleteNth(arr, n){
  let dict = {};

  return arr.filter( (each) => {
    dict[each] = dict[each] ? dict[each] + 1: dict[each] = 1

    return dict[each] <= n //return true //if value is less and equal to `n`
  })
}

deleteNth([20,37,20,21], 1)
//deleteNth([1,1,3,3,7,2,2,2,2], 3)



//2 2022/04/24 11:48am - 01:02 pm 
// function deleteNth(arr, n){
//   let dict = {};
//   let result = [];
//   for(let i=0; i< arr.length; i++){
  
//     if(!dict.hasOwnProperty(arr[i])){
//       dict[arr[i]] = 1
//     }else{
//       dict[arr[i]]++
//     }

//     if(dict[arr[i]] <= n){
//       result.push(arr[i])
//     }
//     console.log(arr[i], dict)
//   }
//   console.log(result)
//   return result
// }

//deleteNth([20,37,20,21], 1)
//deleteNth([1,1,3,3,7,2,2,2,2], 3)



//3 doesn't work
// function deleteNth(arr, n){
//   let dict = {};

//   for(let i=0; i< arr.length; i++){
//     if(!dict.hasOwnProperty(arr[i])){
//       dict[arr[i]] = 1
//     }else{
//       dict[arr[i]]++
//     }
//   }


//   console.log(dict, n, arr)

//   for(let i=arr.length-1; i >= 0; i--){
//     console.log(":::    ::", arr[i])
//     if(dict[arr[i]] > n){
//       console.log(":::    ::::::::", arr[i], dict[arr[i]], n)
//       arr.splice(i, dict[arr[i]]-n)
//       dict[arr[i]] = n
      
//     } 
//   }
//   console.log(arr)
//   return arr
// }





//2 doesn't work
// function deleteNth(arr, n){
//   let dict = {};

//   for(let i=0; i< arr.length; i++){
//     if(!dict.hasOwnProperty(arr[i])){
//       dict[arr[i]] = 1
//     }else{
//       dict[arr[i]]++
//     }
//   }

//   let result = []

//   for(let i=0; i < arr.length; i++){
//     if(dict[arr[i]] > n){
//       dict[arr[i]] = n
//     } else {
//       result.push(arr[i])
//     }
//   }
//   console.log(result)
//   return result
// }




// //1 w diana <3
// function deleteNth(arr,n){
//     // ...11:59am
//     let dict = {}
    
//     for(let i=0; i<arr.length; i++){
//       if(!dict.hasOwnProperty(arr[i])){
//         dict[arr[i]] = 1
//         }else{
//           dict[arr[i]] ++
//         }
//      }
    
//     let result = [];
  
    
//     for(let i=0; i< arr.length; i++){
//       if (!result.includes(arr[i])) {
//         if(dict[arr[i]] <= n){
//           console.log(arr[i], dict[arr[i]], n)
//           let counter = 0;
//           while(counter < dict[arr[i]]){
//             result.push(arr[i])
//             counter++
//           }
//         } else {
//           let counter = 0; 
//           while( counter < n){
//              console.log(arr[i], dict[arr[i]], n)
//             result.push(arr[i]);
//             counter++
//           }
//         }
//        }
//     }
    
//     console.log(result)
//     return result
//   }

//   deleteNth([1,1,3,3,7,2,2,2,2], 3)