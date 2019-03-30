export default class Fraction {
    numerator: number;
    denominator: number;

    constructor(numerator = 0, denominator = 0) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    isNumeratorZero() {
        return this.numerator == 0;
    }

    isDenominatorZero() {
        return this.denominator == 0;
    }

    calculateValue() {
        if (this.isDenominatorZero())
            return 0;

        return this.numerator / this.denominator;
    }

    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
}