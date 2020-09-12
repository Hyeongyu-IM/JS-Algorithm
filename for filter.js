function filterCallback(func, arr) {
    let result = []

    if (arr.length === 0) {
        return result
    }

    for (let i = 0; arr.length > i; i++) {
        if (func(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}


// 숫자를 받아 불리언을 리턴
// 숫자를 값으로 갖는 배열
// 새로운 배열을 리턴해야함