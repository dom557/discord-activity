'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var decimal = require('../lib/decimal.js-light@2.5.0/lib/decimal.js-light/decimal.cjs');
var PriceConstants = require('./PriceConstants.cjs');

function formatPrice(price, locale = 'en-US') {
    const { amount, currency } = price;
    const formatter = Intl.NumberFormat(locale, { style: 'currency', currency });
    return formatter.format(convertToMajorCurrencyUnits(amount, currency));
}
function convertToMajorCurrencyUnits(minorUnitValue, currency) {
    const exponent = PriceConstants.CurrencyExponents[currency];
    if (exponent == null) {
        console.warn(`Unexpected currency ${currency}`);
        return minorUnitValue;
    }
    const minorUnit = new decimal.default(minorUnitValue);
    return minorUnit.dividedBy(10 ** exponent).toNumber();
}
var PriceUtils = {
    formatPrice,
};

exports.default = PriceUtils;
