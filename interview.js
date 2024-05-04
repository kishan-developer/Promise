

// Interview question  promise , callback , asyn await

// Q .1  

// console.log("Start");

// const promise1 = new Promise((resolve, reject)=> {
//     console.log(1);
//     resolve(2);
// });

// promise1.then((res)=> {
//     console.log(res);
// });

// console.log("end");

// output 

// start 
// 1
// end 
// 2


///////////////////////////////////////////


// Q .2  

// console.log("Start");

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
//     console.log(3);
// });

// promise1.then((res) => {
//     console.log(res);
// });

// console.log("end");

// output

// start
// 1
// 3
// end
// 2



///////////////////////////////////////////
// Q .3 

// console.log("Start");

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     console.log(3);
// });

// promise1.then((res) => {
//     console.log("Result "+ res);
// });

// console.log("end");

// // output

// start
// 1
// 3
// end



///////////////////////////////////////////
// Q .4
// console.log("Start");

// const fn = () => 
//     new Promise((resolve, reject)=> {
//         console.log(1);
//         resolve("success");
//     });


// console.log("middle");

// fn().then((res)=> {
//     console.log(res);
// })

// console.log("end");

// output

// start
// middle
// 1
// end
// success




///////////////////////////////////////////
// Q .5


// console.log("Start");

// function job(){
//     return new Promise(function(resolve, reject){
//         reject();
//     });
// }

// let promise = job();

// promise
//     .then(function (){
//         console.log("Success 1");
//     })
//     .then(function (){
//         console.log("Success 2");
//     })
//     .then(function (){
//         console.log("Success 3");
//     })
//     .catch(function (){
//         console.log("Error 1");
//     })
//     .then(function (){
//         console.log("Success 4");
//     })


    // output

    // start 
    // error 1
    // success 4






///////////////////////////////////////////
// Q .6

// function job(state){
//     return new Promise(function (resolve, reject){
//         if(state){
//             resolve("success");
//         }else{
//             reject("error");
//         }
//     });
// }

// let promise = job(true);

// promise
//     .then(function (data){
//         console.log(data);

//         return job(false);
//     })
//     .catch(function (error){
//         console.log(error);

//         return "Error caught";
//     })
//     .then(function (data){
//         console.log(data);

//         return job(true);
//     })
//     .catch(function (error){
//         console.log(error)
//     })


// // output 

//     // success 
//     // error
//     // Error caught
    



///////////////////////////////////



function job(state){
    return new Promise(function (resolve, reject){
        if(state){
            resolve("success");
        }else{
            reject("error");
        }
    });
}


let promise = job(true); // resolve("success")

promise
    .then(function (data){
        console.log(data); // success

        return job(true);
    })
    .then(function (data){
        if(data !== "victory"){  // true
            throw "Defeat";
        }
        return job(true);
    })
    .then(function (data){
        console.log(data);
    })
    .catch(function (error){
        console.log(error);
        return job(false);
    })
    .then(function (data){
        console.log(data);
        return job(true);
    })
    .catch(function (error){
        console.log(error);
        return "Error caught";
    })
    .then(function (data){
        console.log(data);
        return new Error("test");
    })
    .then(function (data){
        console.log("Success: ", data.message);
    })
    .catch(function (data){
        console.log("Error: ", data.message);
    });