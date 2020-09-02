function filteredArray(array, testFunction) {
    let filteredResult = [];

    for (let i = 0; i < array.length; i++) {
        if (testFunction(array[i])) {
            filteredResult.push(array[i])
        }
    }

    return filteredResult;
}