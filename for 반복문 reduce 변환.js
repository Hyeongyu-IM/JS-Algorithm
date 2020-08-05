it('1000 보다 작은 모든 3 또는 5의 배수의 합을 찾아야합니다.', function() {
    let sum = 0;

    for (var i = 1; i < 1000; i += 1) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    expect(sum).toBe(233168);
});

it(위의
    for 구문을 reduce의 형태로 바꾸어보자)
', function() {

function find(acc, cur) {
    if (cur % 3 === 0 || cur % 5 === 0) {
        acc = acc + cur
    } else {}
    return acc
}

//reduce를 쓰며 항상 기억할것은 acc는 담는 역할 cur은 변화를 가져오는것
// 초기 값은 1이 들어가야한다
// 리듀스의 작동방법은 인자를 받아와서 실행되고 다음값이 실행되는것
/* 위의 테스트를 array method reduce를 활용해 바꾸어 보세요*/

expect(233168).toBe(233168);
});