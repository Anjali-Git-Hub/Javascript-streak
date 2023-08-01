import Name,{country,happy} from './utils/file1.js';
import {myAge as age} from './utils/file2.js';
import {Animal} from './utils/file2.js';

console.log(Name,age);
console.log(country,happy)
const Tiger=new Animal("Tiger",false,true);
console.log(Tiger.isDomestic)
Tiger.canClimbTree()