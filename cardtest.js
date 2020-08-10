/**
 * 아래의 detectNetwork 함수는 어떤 카드 번호를 input으로 받아,
 * 카드 회사의 이름('MasterCard', 'American Express)을 return 하는 함수입니다.
 *
 * 예) detectNetwork('343456789012345') // 'American Express'
 *
 * 그럼 어떻게 카드 번호만 가지고, 카드회사를 알 수 있을까요?
 *
 * 2가지 방법이 있습니다.
 *  1. 앞 자리 숫자들 (이번 과제에서는 prefix라 부릅니다.)
 *  2. 숫자들의 길이 (이번 과제에서는 length라고 부릅니다.)
 */

function detectNetwork(cardNumber) {
    //38,39로시작 14의 자릿수 = Diner's Club
    //34,37로시작 15의 자릿수 = American Express
    //4로 시작 13,16,19의 자릿수 = Visa
    //51~,55로 시작 길이는 16 = MasterCard
    //6011, 65, 644~649로 시작 길이는 16 또는 19 = Discover
    //5018,5020,5038,6304 로시작 12~19자리 숫자 = Maestro
    //622126-622925, 624-626,6282-6288 16~19자리 숫자 = China UnionPay
    //4903,4905,4911,4936,564182,633110,6333,6759로 시작 16,18,19 자리의 숫자 = Switch
    let prefix1 = cardNumber.slice(0, 1);
    let prefix2 = cardNumber.slice(0, 2);
    let numprefix2 = Number(cardNumber.slice(0, 2));
    let prefix3 = cardNumber.slice(0, 3);
    let numprefix3 = Number(cardNumber.slice(0, 3));
    let prefix4 = cardNumber.slice(0, 4);
    let prefix6 = cardNumber.slice(0, 6);
    let prefix7 = cardNumber.slice(0, 7);
    let prefix9 = cardNumber.slice(0, 9);
    let prefix12 = cardNumber.slice(0, 13);

    let numlength = cardNumber.length;

    let D = `Diner's Club`
    let A = `American Express`
    let V = `Visa`
    let M = `MasterCard`
    let Dis = "Discover"
    let Ma = "Maestro"
    let C = `China Unionpay`
    let S = "Switch"

    if ((prefix2 === '38' || prefix2 === '39') && numlength === 14) {
        return D;
    } else if ((prefix2 === '34' || prefix2 === '37') && numlength === 15) {
        return A;
    } else if ((numlength === 13 || numlength === 16 || numlength === 19) && prefix1 === '4') {
        return V;
    } else if ((numprefix2 <= 55 && numprefix2 >= 51) && numlength === 16) {
        return M;
    } else if (((numprefix3 < 650 && numprefix3 > 643) || prefix4 === '6011' || prefix2 === '65') && (numlength === 16 || numlength === 19)) {
        return Dis;
    } else if ((prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6304') && (numlength <= 19 && numlength >= 16)) {
        return Ma;
    } else if ((prefix12 === `622126 - 622925` || prefix7 === `624-626` || prefix9 === `6282-6288`) && (numlength >= 16 && numlength <= 19)) {
        return C;
    } else if ((prefix4 === '4903' || prefix4 === '4905' || prefix4 === '4911' || prefix4 === '4936' || prefix4 === '6333' || prefix4 === '6759' || prefix6 === '633110') && (numlength === 16 || numlength === 18 || numlength === 19)) {
        return S
    }

}

// you don't have to worry about this code. keep this code.

if (typeof window === "undefined") {
    module.exports = detectNetwork;
}