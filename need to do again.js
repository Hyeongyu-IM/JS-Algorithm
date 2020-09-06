function multiplicativePersistence(num) {

    function counter(num, count) {
        if (String(num).length === 1) {
            return count;
        }
        let result = String(num).split('').reduce(function(acc, cur) {
            return acc * cur
        });
        return counter(result, count + 1);
    }

    return counter(num, 0);
}


// 꼭 다시 한번 풀어봐야할 문제로 맨처음에는 재귀함수로 계산을 하고싶었는데 응용을 잘못해서 인자가 하나인데 선언할때마다
// 카운트값이 바뀌는데 어떻게해야하나 골머리를 싸매다가 다른 블로그에서 힌트를 얻어 풀게되었다