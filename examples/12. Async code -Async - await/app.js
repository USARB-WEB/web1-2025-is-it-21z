
async function startApp() {
    
    
    async function f() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 2000)
        });

        return await promise; // wait until the promise resolves (*)
    }

    const result = await f();

    console.log(result);
}


startApp();

