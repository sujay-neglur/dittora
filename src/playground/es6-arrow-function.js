/*
const square = function(x){
    return x*x;
};

/!*const squareArrow = (x) => {
  return x*x;
};*!/

const squareArrow =(x) => x*x;

console.log(squareArrow(9));*/
const fullName = 'Mike Smith';
let firstName;
/*const getFirstName = (fullName) => {
    firstName = fullName.split(' ')[0];
    return firstName;
};
console.log(getFirstName(fullName));*/

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName(fullName));