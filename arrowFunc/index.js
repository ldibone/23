const func1 = function(){
console.log (arguments)
}

function func2(){
    console.log (arguments)  
}

const func3 = (arg1) => console.log(arg1) 
   
const arr=[1,2,3,4,5]

console.log(arr.filter((item) => item > 3))

const func4 = (arg) => {
    return func3
}

const addFour = (num) => {
    const num = num + 4
    return () => console.log(sum)
}

const showResult = addFour(6)