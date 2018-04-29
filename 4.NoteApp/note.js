console.log('starting note');

var getNotes=()=>{
    console.log('returning notes');
}

var addNote=(title,body)=>{
    console.log(`Note with title ${title} and body ${body} added`);
}
var getAll = ()=>{
    console.log(`printing all the notes`);
};

var read=(title)=>{
    console.log(`retrieving note with title ${title}`);
}

var remove = (title) => {
    console.log(`removing note with title ${title}`);
}

module.exports ={
    getNotes:getNotes,
    addNote:addNote,
    getAll,
    read,
    remove
}