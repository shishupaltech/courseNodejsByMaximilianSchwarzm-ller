const fetchData = ()=>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('done');
        },1500)
        
    });

    return promise; 
}
// asyncronous code 
setTimeout(()=>{
 console.log('Timer is done! ');
 fetchData().then(text=>{
    console.log(text);
    return fetchData().then(text=>{
        console.log(text);
    })
 })
},1);

// syncronous code 
console.log('Hello!');
console.log('hi..');