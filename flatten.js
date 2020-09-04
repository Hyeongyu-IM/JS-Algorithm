function flatten(array) {
    return array.reduce(function(acc, cur) {
        return acc.concat(cur)
    }, [])
}

//레벨 4여서 쫄았지만 생각보다 쉬웠던 문제