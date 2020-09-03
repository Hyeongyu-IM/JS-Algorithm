function DashInsert(string) {
  let result = ''
  for (let i = 0; string.length > i; i++) {
    if (string[i] % 2 === 1 && string[i + 1] % 2 === 1) {
      result = result + string[i] + '-'
    } else {
      result = result + string[i]
    }
  }
  return result
}

//간단한 문제였지만 저기에 스트링 i를 붙이면 된다는것을 인식하기 어려웠다 답지볼까 생각했지만 안봄 ㅎㅎ