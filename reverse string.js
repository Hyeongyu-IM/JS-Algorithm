function firstReverse(str) {
    let result = ''
    for (let i = str.length - 1; i >= 0; i = i - 1) {
        result = result + str[i]
    }
    return result

}