import Fraction from '../models/Fraction';
import Message from '../models/Message';

export const cal2Fractions = (fraction1: Fraction, fraction2: Fraction, calculation: string) => {
    let msg = new Message();
    if (!fraction1 || !fraction2) {
        msg.result = null;
        msg.message = 'Invalid input';
        return msg;
    }

    if (fraction1.isDenominatorZero()) {
        msg.result = null;
        msg.message = 'Fraction1 error: invalid denominator';
        return msg;
    }

    if (fraction2.isDenominatorZero()) {
        msg.result = null;
        msg.message = 'Fraction2 error: invalid denominator';
        return msg;
    }

    let fraction = new Fraction();
    switch(calculation) {
        default:
        case '-':
            fraction.numerator = fraction1.numerator * fraction.denominator - fraction2.numerator * fraction1.denominator;
            fraction.denominator = fraction1.denominator * fraction2.denominator;
            msg.message = 'Subtract 2 fractions successfully!';
        break;
        case '+':
            fraction.numerator = fraction1.numerator * fraction.denominator + fraction2.numerator * fraction1.denominator;
            fraction.denominator = fraction1.denominator * fraction2.denominator;
            msg.message = 'Add 2 fractions successfully!';
        break;
        case '*':
            fraction.numerator = fraction1.numerator * fraction2.numerator;
            fraction.denominator = fraction1.denominator * fraction2.denominator;
            msg.message = 'Multiply 2 fractions successfully!';
        break;
        case '/':
            if (fraction2.calculateValue() == 0) {
                msg.result = null;
                msg.message = "Can't divide by zero!";
                return msg;
            }
            fraction.numerator = fraction1.numerator * fraction2.denominator;
            fraction.denominator = fraction1.denominator * fraction2.numerator;
            msg.message = 'Divide 2 fractions successfully!';
        break;
    }

    msg.result = fraction;
    return msg;
}