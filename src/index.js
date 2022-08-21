//const delay = ms => new Promise(resolve => setTimeout(resolve, ms))


// This is isn't declared as `async` because it already returns a promise
// normal executer function
function delay(ms, i) {
    // `delay` returns a promise
    return new Promise(function (resolve, reject) {
        // Only `delay` is able to resolve or reject the promise
        setTimeout(function () {
            resolve(i); // After 3 seconds, resolve the promise with value 42
        }, Math.random() * 2000 + ms);
    });
}

// executer arrow function
function delayArrow(ms, i) {
    // `delay` returns a promise
    return new Promise(resolve, reject => {
        // Only `delay` is able to resolve or reject the promise
        setTimeout(function () {
            resolve(i); // After 3 seconds, resolve the promise with value 42
        }, ms);
    });
}




// Asynchronous 機制
async function p(ms, i) {

    // 方法一: callback 機制 -> timeout event -> trigger callback function
    //setTimeout(() => console.log(`i = ` + i), ms);

    // 方法二: Promise 機制 -> console.log 等到 dely 完成才會執行
    // delay(ms, i)
    //     .then(value => {
    //         console.log(`value = ` + value)
    //     })


    // 方法三: async/awit -> console.log 等到 dely 完成才會執行
    await delay(ms, i)
    console.log(`i = ` + i)
}




for (i = 0; i < 100; i++) {
    console.log('before i = ' + i)
    p(1000, i)
} 
