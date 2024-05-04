// Promises in Javascript

//1 Synchronous vs Asynchronos code

// Sync

// console.log("Start")

// console.log("Processing starting ")

// console.log("Finish");



//Async code

// console.log("start");

// setTimeout(()=> {
//     console.log("Subscribe to Bigen Dev");
// }, 0)

// console.log("Finish");



///////////////////////////////////////////

// console.log("Start");

// function importantAction(userName){
//     setTimeout(()=> {
//         return `hello ${userName}`;
//     }, 1000)
// }

// const message = importantAction("Har Har Mahadev");

// console.log(message);

// console.log("Stop")


/////////////////////////////////////////////

// Callback

// console.log("start");

// function importantAction(userName, callback){
//     setTimeout(()=> {
//         callback(`Hello ${userName}`);
//     },1000);
// }

// const message = importantAction("Mahadev", function (message){
//     console.log(message);
// });

// console.log("Stop");





// eg 2


// console.log("start");

// function importantAction(userName, callback) {
//     setTimeout(() => {
//         callback(`Hello ${userName}`);
//     }, 1000);
// }

// function lickThevideo(video, callback){
//     setTimeout(()=> {
//         callback(`Lick the  ${video} video`);
//     },1000)
// }

// const message = importantAction("Mahadev", function (message) {
//     console.log(message);
//     lickThevideo("Javascript Promises" , (action)=> {
//         console.log(action)
//     })
// });

// console.log("Stop");



///////////////////////////////////////////


// eg 3


// console.log("start");

// function importantAction(userName, callback) {
//     setTimeout(() => {
//         callback(`Hello ${userName}`);
//     }, 5000);
// }

// function lickThevideo(video, callback) {
//     setTimeout(() => {
//         callback(`Lick the  ${video} video`);
//     }, 1000)
// }

// importantAction("Mahadev", function (message) {
//     console.log(message);

// });

// lickThevideo("Javascript Promises", (action) => {
//     console.log(action)
// })

// console.log("Stop");



///////////////////////////////////////////



// eg 4


// console.log("start");

// function importantAction(userName, callback) {
//     setTimeout(() => {
//         callback(`Hello ${userName}`);
//     }, 1000);
// }

// function lickThevideo(video, callback){
//     setTimeout(()=> {
//         callback(`Lick the  ${video} video`);
//     },1000)
// }

// function Sharethevideo(video, callback){
//     setTimeout(()=> {
//         callback(`share the ${video} video`);
//     },1000)
// }


// // thsi is called callback hell
// const message = importantAction("Subscript the video", function (message) {
//     console.log(message);
//     lickThevideo("Javascript Promises" , (action)=> {
//         console.log(action)
//         Sharethevideo("Javascript Interview Questions", (action) =>{
//             console.log(action)
//             Sharethevideo("Javascript Interview Questions", (action) => {
//                 console.log(action)
//                 Sharethevideo("Javascript Interview Questions", (action) => {
//                     console.log(action)
//                     Sharethevideo("Javascript Interview Questions", (action) => {
//                         console.log(action)
//                         Sharethevideo("Javascript Interview Questions", (action) => {
//                             console.log(action)
//                         })
//                     })
//                 })
//             })

//         })
//     })
// });

// console.log("Stop");



///////////////////////////////////////////

// callback hello solutionis the promises

// Promises

// console.log("Start");

// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = true;
//         if (result) resolve("Subscribe the Roadside coder");
//         else reject(new Error("why aren't you subscribed to Roadside coder?"));
//     }, 2000);
// });

// console.log(sub)


// console.log("Stop");


/////////////////////////////////////////
// eg 2

// console.log("Start");

// const sub = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         const result = true;
//         if(result) resolve("Subscribe the Roadside coder");
//         else reject(new Error("why aren't you subscribed to Roadside coder?"));
//     },2000);
// });

// sub
//  .then((res)=> {console.log(res)})
//  .catch((err)=> {console.error(err)});


// console.log("Stop");




// /////////////////////////////////////////


// console.log("start");

// function importantAction(userName ) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve(`Hello ${userName}`);
//         }, 1000);
//     });
// };

// function lickThevideo(video ){
//     return new Promise((resolve , reject)=> {
//         setTimeout(() => {
//             resolve(`Lick the  ${video} video`);
//         }, 1000);
//     });
// };

// function Sharethevideo(video){
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve(`share the ${video} video`);
//         }, 1000);
//     });
// };

// importantAction("Kishan ")
//     .then((res)=> {
//         console.log(res);
//     })
//     .catch((err)=> console.error(err));

// console.log("Stop");




// // /////////////////////////////////////////

// //Promise Chaining 

// console.log("start");

// function importantAction(userName ) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve(`Hello ${userName}`);
//         }, 1000);
//     });
// };

// function lickThevideo(video ){
//     return new Promise((resolve , reject)=> {
//         setTimeout(() => {
//             resolve(`Lick the  ${video} video`);
//         }, 1000);
//     });
// };

// function Sharethevideo(video){
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve(`share the ${video} video`);
//         }, 1000);
//     });
// };

// importantAction("Kishan ")
//     .then((res)=> {
//         console.log(res);
//         return lickThevideo("Javascript");
//     }).then((res)=> {
//         console.log(res)
//         return Sharethevideo("Promise");
//     }).then((res)=> {
//         console.log(res);
//     })
//     .catch((err)=> console.error(err));

// console.log("Stop");




// // /////////////////////////////////////////

// //Promise combinator => 

//     // promise.all => it help to more then promises (any promise are failed to fail the promise , all promise all resolve the resolve)

// console.log("start");

// function importantAction(userName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Hello ${userName}`);
//         }, 1000);
//     });
// };

// function lickThevideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Lick the  ${video} video`);
//         }, 1000);
//     });
// };

// function Sharethevideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`share the ${video} video`);
//         }, 1000);
//     });
// };


// Promise.all([
//     importantAction("Hello"),
//     lickThevideo("Javascript Code"),
//     Sharethevideo("Promise")
// ])
// .then((res)=> {
//     console.log(res);
// })
// .catch((err)=> {
//     console.error(err);
// })


// console.log("Stop");




// /////////////////////////////////////////

//Promise combinator => 

// promise.all => it help to more then promises (any promise are failed to fail the promise , all promise all resolve the resolve)

// console.log("start");

// function importantAction(userName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Hello ${userName}`);
//         }, 1000);
//     });
// };

// function lickThevideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(`Lick the  ${video} video`);
//         }, 1000);
//     });
// };

// function Sharethevideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`share the ${video} video`);
//         }, 1000);
//     });
// };


// Promise.all([
//     importantAction("Hello"),
//     lickThevideo("Javascript Code"),
//     Sharethevideo("Promise")
// ])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error("Error : Promises failed",err);
//     })


// console.log("Stop");





// // /////////////////////////////////////////

// //Promise combinator => 


// console.log("start");

// function importantAction(userName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Hello ${userName}`);
//         }, 1000);
//     });
// };

// function lickThevideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Lick the  ${video} video`);
//         }, 1000);
//     });
// };

// function Sharethevideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`share the ${video} video`);
//         }, 1000);
//     });
// };

// // promise.race is the first promise is resolve or reject give the output 

// Promise.race([
//     importantAction("Hello"),
//     lickThevideo("Javascript Code"),
//     Sharethevideo("Promise")
// ])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err);
//     })


// console.log("Stop");






// /////////////////////////////////////////

//Promise combinator => 


// console.log("start");

// function importantAction(userName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Hello ${userName}`);
//         }, 1000);
//     });
// };

// function lickThevideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Lick the  ${video} video`);
//         }, 1000);
//     });
// };

// function Sharethevideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`share the ${video} video`);
//         }, 1000);
//     });
// };

// // promise.race is the first promise is resolve or reject give the output 

// Promise.race([
//     importantAction("Hello"),
//     lickThevideo("Javascript Code"),
//     Sharethevideo("Promise")
// ])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err);
//     })


// console.log("Stop");





// /////////////////////////////////////////

//Promise combinator => 


// console.log("start");

// function importantAction(userName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(`Hello ${userName}`);
//         }, 1000);
//     });
// };

// function lickThevideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Lick the  ${video} video`);
//         }, 1000);
//     });
// };

// function Sharethevideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`share the ${video} video`);
//         }, 1000);
//     });
// };

// // promise.allSettled is the resolve the all promise if any promise fail than it will check the all promise resolve all reject after than is giving the result  

// Promise.allSettled([
//     importantAction("Hello"),
//     lickThevideo("Javascript Code"),
//     Sharethevideo("Promise")
// ])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err);
//     })


// console.log("Stop");




// /////////////////////////////////////////

// async await=> 


console.log("start");

function importantAction(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello ${userName}`);
        }, 1000);
    });
};

function lickThevideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Lick the  ${video} video`);
        }, 1000);
    });
};

function Sharethevideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`share the ${video} video`);
        }, 1000);
    });
};


// async await

// const result = async()=> {
//     const message1 = await importantAction("React ");
//     const message2 = await lickThevideo("Javascript Interview Questions");
//     const message3 = await Sharethevideo("Promise")

//     console.log({message1, message2,message3})
// }

// result();


// if you have any erro than usign try catch block

const result = async()=> {
    try{
        const message1 = await importantAction("React ");
        const message2 = await lickThevideo("Javascript Interview Questions");
        const message3 = await Sharethevideo("Promise")

        console.log({ message1, message2, message3 })
    }
    catch(error){
        console.error("Promises Failed",error);
    }
    
}

result();



console.log("Stop");


















