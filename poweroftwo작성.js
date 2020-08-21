function powerOfTwo(num) {
    if (num === 1) {
        return true
    }
    let result
    while (result < 3) {
        result = num / 2
    }
    if (result === 2) {
        return true
    } else {
        return false
    }
}