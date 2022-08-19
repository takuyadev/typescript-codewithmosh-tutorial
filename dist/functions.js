"use strict";
function calculateTax(income, taxYear, variable = 2022) {
    if (income < 50000) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000, 2022);
//# sourceMappingURL=functions.js.map