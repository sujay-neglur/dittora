const multiplier = {
    numbers: [2,3,4],
    multiply(multiplyBy){
        return this.numbers.map((number) => multiplyBy*number);
    }
};
console.log(multiplier.multiply(6));