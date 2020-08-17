it("객체의 property로 담겨있는 function이 method처럼 작동하는지 확인합니다.", function() {
    const meglomaniac = {
        mastermind: "Brain",
        henchman: "Pinky",
        battleCry: function(noOfBrains) {
            return "They are " + this.henchman + " and the" +
                Array(noOfBrains + 1).join(" " + this.mastermind);
        }
    };

    const battleCry = meglomaniac.battleCry(4);
    expect("They are Pinky and the Brain Brain Brain Brain").toMatch(battleCry);
}); // 빈(5)개 짜리 배열이지만 사이사이 공백이 4개 있기때문에 저렇게 나오는거고 " " 공백뒤에 저이름을 붙이게 되있기 때문에 저렇게 나오는것.
//사실 빈배열을 만드는 것을 본적이 별로없기 때문에 문제에 대해서 잘 이해가 가지않았다...ㅠㅠ
//빈배열의 사이사이의 공백에 이름을 넣는것