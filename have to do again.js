var alphabetPosition = function(str) {
    let result = ''
    let alpha = "abcdefghijklmnopqrstuvwxyz".split('')
    let lower = str.toLowerCase()
    let alphaarr = lower.split("")

    return alphaarr.map(function(name) {
        return alpha.indexOf(name) + 1
    }).filter(function(position) {
        return position !== 0;
    }).join(' ')

}