//1 2022/04/24 2:25pm - 


//2 using forEach
 function isIsogram(str){
    str = str.toUpperCase()
    let obj = {}
    let result = true;

    [...str].forEach(each => {
        obj[each] = obj[each]? obj[each] +1 : 1
    })

    Object.values(obj).forEach(each => {if(each > 1) return result = false
    })
  
    console.log(result)
    return result
}
isIsogram("Dermatoglyphics")


// function isIsogram(str){
//     str = str.toUpperCase()
//     let obj = {}
//     let result = true;
    
//     for(let i=0; i< str.length; i++){
//       //console.log(str[i])
//       if(!obj.hasOwnProperty([str[i]])){
//         obj[str[i]] = 1
//       } else {
//         obj[str[i]]++
//       }
//     }
    
//     for(let keys in obj){
//       if(obj[keys] > 1) {
//         return result = false
//         } 
//     }
    
//     console.log(result)
//     return result
// }

// isIsogram("Dermatoglyphics")