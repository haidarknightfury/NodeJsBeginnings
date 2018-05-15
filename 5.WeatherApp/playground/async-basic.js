console.log('starting application');

// async callback to be triggered in 2 seconds later
setTimeout(()=>{
    console.log('inside of callback');
},2000);

setTimeout(()=>{
    console.log('second callback');
},0);

console.log('finishing application');

