module.exports = function solveEquation(equation) {
    equation = equation.replace(/\s*/ig, '');

    const a = Number(equation.match( /[+-]{0,1}\d+(?=\*x\^2)/gi )[0]);
    const b = Number(equation.match( /[+-]{0,1}\d+(?=\*x[+-])/gi )[0]);
    const c = Number(equation.match( /[+-]{1}\d+(?=($|-|\+))/gi )[0]);

    const discriminant = getDiscriminant(a,b,c);
 
    if (discriminant > 0) {
        const x1 = getX(a, b, c, discriminant, 1);
        const x2 = getX(a, b, c, discriminant, -1);
        return [Math.round(x1), Math.round(x2)].sort( (a,b)=> a - b);
    } else if (discriminant === 0) {
        const x1 = getX(a, b, c, 0);
        return [Math.round(x1)];
    } else {
        return null;
    }
}

const getDiscriminant = (a,b,c) => {
    return (b*b) - (4 * a * c);
}

const getX = (a, b, c, discr, sing = 1) => {
    return (-b + sing * Math.sqrt(discr)) / (2 * a)
}
