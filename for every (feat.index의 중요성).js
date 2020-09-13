_.every = function(collection, iterator) {
    let result = [];
    let falsy = [NaN, 0, false, undefined, '', null, -0];

    if (collection.length === 0) {
        return true;
    }
    if (iterator === undefined) {
        for (let k in collection) {
            if (!collection[k]) {
                return false;
            }
        }
    } else {
        for (let i = 0; collection.length > i; i++) {
            result.push(iterator(collection[i]));
        }
        for (let q = 0; result.length > q; q++) {
            if (_.indexOf(falsy, result[q]) !== -1) {
                return false;
            }
        }
    }

    return true;
};

// true or false를 판별할때는 인덱스를 통해 바로 조회하는방법이 훨씬 유용하다.