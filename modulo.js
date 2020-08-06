`조건 : 두 숫자가 주어졌을때, "modulo" 함수는 첫번째 수를 두번째 수로 나눴을때 나머지 값을 반환합니다.
상세조건
나머지 연산자(%)를 사용하지 마세요.

0 % ANYNUMBER(숫자) = 0.

ANYNUMBER(숫자) % 0 = NaN.

두 수중 하나라도 NaN 이라면, 결과값은 NaN 입니다.

modulo 함수는 항상 첫번째 숫자의 +/- 값을 반환합니다.
`

function modulo(num1, num2) {
    if (isNaN(num2) || num2 === 0 || isNaN(num1)) {
        return NaN;
    }

    let plusminus = (num1 < 0) ? -1 : 1;

    num1 = Math.abs(num1)
    num2 = Math.abs(num2)

    while (num1 >= num2) {
        num1 = num1 - num2
    }
    return num1 * plusminus

}

//NaN이 나오는 3가지 조건을 먼저 만족 시키고
// 그다음에는 음수를 파악하기 위해 삼항 연산자를 이용해 판별해준다
// 절대값으로 음수를 지우고 계속 두번째 숫자를 - 해서 두번째 숫자와 같아지거나 작아질때 멈추게 된다
// 나온 리턴값에 음수판별식을 곱해주면 끝