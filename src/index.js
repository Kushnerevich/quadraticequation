module.exports = function solveEquation(equation) {
    let variable = equation.split(' ');
    let secondSign = (variable[3] === '-') ? -1: 1;
    let thirdSign = (variable[7] === '-') ? -1: 1;
    let D = variable[4] * variable[4] - 4 * variable[0] * variable[8] * thirdSign;
    let x1;
    let x2;
    if (D>0) {
         x1 = (-(variable[4] * secondSign) + Math.sqrt(D))/ (2*variable[0]);
         x2 = (-(variable[4] * secondSign) - Math.sqrt(D))/ (2*variable[0]);
    }

    return [Math.round(x1),Math.round(x2)].sort(function (a,b) {
        return a-b;
    });
};

