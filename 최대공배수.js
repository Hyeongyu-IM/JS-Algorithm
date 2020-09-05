function gcd(num1, num2) {
    if (num2 === 0) {
        return num1
    } else {
        return gcd(num2, num1 % num2)
    }

}



//두 수 A와 B가 있으면 서로의 수를 나누어가기를 반복하며 나머지가 0이 되었을 때의 나누는 수가 A와 B의 최대공약수이다.