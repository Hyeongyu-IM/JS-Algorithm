function letterCapitalize(str) {
    let result = str[0].toUpperCase()

    for (let i = 1; str.length > i; i++) {
        if (typeof str[i] === "string" && str[i - 1] === ' ') {
            result = result + str[i].toUpperCase()
        } else {
            result = result + str[i]
        }
    }
    return result

}