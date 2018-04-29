// look directly from node modules if not in defined
const _ = require('lodash');

var arr = [0,1,2,3,5,6];
_.fill(arr,0,0,5);
    
console.log('unfiltered array',arr);
console.log('filtered',_.uniq(arr));