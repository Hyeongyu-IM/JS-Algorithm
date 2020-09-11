function returnFunction() {
    return function hello() {
        return `Hello HoF!`
    }
}


function functionParameter(func, num) {
    return func(num)
}