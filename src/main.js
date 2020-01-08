const myPromise = () => new Promise( ((resolve, reject) => {
    setTimeout(() => {
        resolve("ok");
    }, 2000);
}));

// old
myPromise().then(value => {
    console.log(value);
}).catch(reason => {
    console.log(reason);
})

//new
async function executePromise() {
    const response = await myPromise();
    console.log(response);
}

executePromise();


const executePromisseArrowFunction = async () =>{
    const response = await myPromise();
    console.log(response);
};

executePromisseArrowFunction();