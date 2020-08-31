let bugInApple = function(array) {
        let result
        for (let i in array) {
            for (let q = 0; array[i].length > q; q++) {
                if (array[i][q] === 'B') {
                    result = [Number(i), q]
                }
            }
        }
        return result

    }
    //배열의 조회 reduce? or for
    //배열의 자리와 위치를 출력 배열의 자리를 n 위치를 n2로 두고 출력해보자