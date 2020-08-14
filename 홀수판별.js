function isOddWithoutModulo(num) {
  if(num === 0){
    return false
  }
 let number = Math.abs(num)

 while(number >= 0){
    number = number -2  
 }
 if(number === 1 || number === -1){
   return true
 } else{
   return false
 }
}





// 나머지 연산자를 사용하지 않고 주어진 숫자가 홀수인지 판별
// 0과 음수가 주어져도 동작
// 반복문