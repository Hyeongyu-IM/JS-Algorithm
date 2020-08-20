function computeSquareRoot(num) {
    let baseNum = 0;

    while (baseNum * baseNum <= num) {
        baseNum = baseNum + 0.0001;
    }

    baseNum = Number(baseNum.toFixed(2));

    return baseNum;
}