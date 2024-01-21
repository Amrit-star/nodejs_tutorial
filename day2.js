// function add(a, b){
//     return a+b;
// }

// ************
// var add=function(a, b){
//     return a+b;
// }

//  ************
// var add = (a, b) => a+b;



// console.log(add(12, 6));


// callback function

// function callback(){
//     console.log('callback function is called')
// }
const add = function(a, b, callback){
    var result=a+b
    console.log('The sum is ' +result);
    callback();
}
// add(3, 5, callback);

// // inline
// add(4, 5, function(){
//     console.log("Add completed")
// })

add(4, 5, () => console.log("Add completed"))
