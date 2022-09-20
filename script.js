// let arr = [2,3,5,7,9,10]

//map()
//arr.methodName(function(currentItem, index, actualArray)){})
// let newArray = arr.map(function(currentItem, index, array){
//     console.log(`currentItem is ${currentItem} index ${index}, array ${array}`)
//     return currentItem*2
// })
// console.log(arr)
// console.log(newArray)

//filter()
// let filterValues = arr.filter(function(currentItem, index, array){
//     return currentItem > 5
// })
// console.log(filterValues)

//every() retur tru if all values cumplen la condicion
// let everyValue = arr.every(function(currentItem){
//     return currentItem > 5
// })
// console.log(everyValue)

//some() devuelve true si algunos valores cumplen la condicion

//sorting() ordena alfabeticamente 
// var names =["Borja", "Leo", "Esther"]
// console.log(names.sort())

// var points = [10,5,82,45]
// let sortedValue = points.sort(function(a,b){
//     return b-a
// })
// console.log(sortedValue)

//reduce methods
//array.reduce(function(total, currenValue, index, array){})
// let num = [12, 78, 30]
// let sum = num.reduce(function(total, currentItem){
//     console.log(total, currentItem)
//     return tota+-currentItem
// })
// console.log(sum)

//foreach - map() always return something, foreach no
//num.forEach(function(currentItem){})







//********PROMISES**********
// function checkIsSuccess(data){
//     return new Promise(function(resolve, reject){
//         if(data==="success"){
//             return resolve("successfully executed")
//         }else{
//             return reject("unsuccessfully executed")
//         }
//     })
// }
// checkIsSuccess('success').then(function(result){
//     console.log(result)
// }).catch(function(error){
//     console.error(error)
// })

// fetch('https://api.github.com/users/BMayoral').then(function(result){
//     return result.json()
// }).then(function(response){
//     console.log(response)
// })
