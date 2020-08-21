function powerOfTwo(num) {
    if (num === 1) {
        return true
    }
    let result = 0;
    for (num; num > 1; num = num / 2) {
        result = num
    }
    if (result === 2) {
        return true
    } else {
        return false
    }
}