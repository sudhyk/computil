const inverselagrange = (x, y, ya) => {
    var total = 0.0

    for (let i=0; i<x.length; i++) {
        var numer = 1.0
        var denom = 1.0

        for (let j=0; j<x.length;j++) {
            if (j!=i) {
                numer *= (ya - y[j])
                denom *= (y[i] - y[j])
            }
        }
        total += numer * x[i] / denom
    }
    return total
}

export default inverselagrange;