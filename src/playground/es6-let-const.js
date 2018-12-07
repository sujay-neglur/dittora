var nameVar = 'Suyash';
var nameVar = 'Mahen';
console.log('nameVar',nameVar);

let nameLet = 'Sugandha';
nameLet = 'Sudhanshu';

console.log('nameLet',nameLet);

const nameConst = 'Frank';
//nameConst = 'Gunther';
console.log('nameConst',nameConst);

//Block Scoping

const fullName = 'Suyash Malthankar';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);