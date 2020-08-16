function getLengthOfLongestElement(arr) {
    if (arr.length === 0) {
        return 0
    }
    let result = arr.reduce(function(acc, cur) {

        if (acc.length >= cur.length) {
            return acc
        }
        return cur
    })
    return result.length
}