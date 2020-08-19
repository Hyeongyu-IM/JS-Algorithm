function multiplyBetween(num1, num2) {
    if(num1 === num2 || num1 > num2){
      return 0;
    }
   
    
    let result = 1;
    for(num1; num1 < num2; num1++){
           result = result * num1
           }
           return result
   }
   
   
   
   
   
   
   // 두개의 인자를 받을때 첫번째 인자를 포함하고 두번째 인자는 포함하지 않는다  = 반복문
   // 두번째 숫자가 첫번째 숫자보다 작다면 0//
   // 숫자가 같다면 0//
   // 차이가 1만 난다면 앞의숫자
   // 음수일 경우도 따져주기 곱하기니까 1 or -1설정//