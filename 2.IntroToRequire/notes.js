console.log('writing notes');
// export age
module.exports.age = 25;

module.exports.addNote =()=>{
   console.log('add Note');
   return 'New Note';
}

module.exports.add =(a,b)=>{
    console.log(`${a} and ${b}`);
    return a+b;
}