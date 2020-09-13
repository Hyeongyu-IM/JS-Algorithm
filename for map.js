function mapCallback(func, arr) {
    let result = []

    if (arr.length === 0) {
        return result
    }

    for (let i = 0; arr.length > i; i++) {
        result.push(func(arr[i]))
    }
    return result
}


//함수와 배열을 받아 새로운 배열을 리턴
//타입은 숫자
// 0이상의 정수
// 배열을 리턴해야 합니다 (메이비 담을 그릇)
// 반복문을 사용(for)
//