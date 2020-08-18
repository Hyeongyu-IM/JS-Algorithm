function sumDigits(num) {
    let stnum = String(num)
    let result = 0
    for (let i = 0; stnum.length > i; i++) {
        if (stnum[0] === '-' && i === 1) {
            result = -(Number(stnum[1]))
        } else {
            result = result + Number(stnum[i])
        }
    }
    return result
}

// result = -(Number(stnum[1])) 여기서 result = result + -(Number(stnum[1])) 하면 NaN이 나온다 주의