// https://www.codewars.com/kata/59557b2a6e595316ab000046/train/javascript


//3 2022/04/24 6:25pm - 
function convertHashToArray(hash){
  let result = []
  Object.keys(hash).sort().map(each => {
    result.push([each, hash[each]])
  })
}


//2 2022/04/24 6:21pm - 
// function convertHashToArray(hash){
//   return Object.entries(hash).sort()
// }

//1 2022/04/24 4:40 - 5:22pm
// function convertHashToArray(hash){
//     //your code here - sort the keys!
    
//     let result = []
    
//     Object.keys(hash).sort().forEach((each) => {
//       result.push([each, hash[each]])
//     })
    
//     console.log(result)
//     return result
//   }

  convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'})