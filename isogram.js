let isIsogram = function(str) {
    if (str.length === 0) {
        return true
    }
    let result = {}
    let lower = str.toLowerCase()

    for (let i = 0; lower.length > i; i++) {
        if (result[lower[i]]) {
            return false
        }
        result[lower[i]] = 1;
    }
    return true

}


//레벨 3에서는 자력으로 통과하기가 굉장히 힘이드는구나...
// 먼저 대소문자를 가려야하니 소문자로 바꾸는것은 쉽게 생각했다
// 하지만 다음과정에서 어떻게 이것을 판독을 할지 생각을 해보았는데
// 따져보면 이것을 객체로 하나하나하나 카운트해서 넣어준다면 모든객체가 1일때 트루를 리턴하게 된다
// 만약 2가 나오는게 있다면 false를 넣으면 되겠지
//항상 falsy가 되는값과 true가 되는값을 인지하고있기.