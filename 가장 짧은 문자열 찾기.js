function findShortestWordAmongMixedElements(arr) {
    if (arr.length === 0) {
        return ''
    }

    return arr.reduce((acc, cur) => {
        if (typeof acc !== 'string') {
            if (typeof cur === 'string') {
                return cur
            }
            return ''
        }

        if (typeof cur === 'string') {
            if (cur.length < acc.length) {
                return cur
            }
            return acc
        }
        return acc
    })
}

// 리듀스의 활용능력이 아직 부족한듯 보였다 더 노력해야 할듯