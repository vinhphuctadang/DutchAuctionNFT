function delayReturn(n) {
    return new Promise((res, reject) => {
        setTimeout(() => {
            res(Math.sqrt(n))
        }, 500)
    })    
}

async function main(){
    await delayReturn(10).then(res => console.log(res))
    delayReturn(16).then(res => console.log(res))
}

main()