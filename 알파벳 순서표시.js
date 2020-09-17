var alphabetPosition = function(str) {
    let alpha = "abcdefghijklmnopqrstuvwxyz".split("")
    let lower = str.toLowerCase()
    let lowerarr = lower.split("")

    return lowerarr.map(function(name) {
        return alpha.indexOf(name) + 1
    }).filter(function(num) {
        if (num !== 0) {
            return true
        }
    }).join(" ")

}


/* 먼저 알파벳을 순서대로 정렬해서 조회할수있도록 설정 
대문자는 조회가 불가능하므로 소문자로 바꾸기
배열로 바꾼다 split, 마지막은 문자열로 join
알파벳이 아니라면 무시해야한다 조회한결과값이 0(공백) 이면 false를 반환
ㄱ ㄱ */