/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Fraction from '../models/Fraction';
import FractionCalculator from './FractionCalculator';

type Props = {};
export default class Home extends Component<Props> {

    constructor(props: Props) {
        super(props);

        this.fraction1 = new Fraction(1, 3);
        this.fraction2 = new Fraction(0, 2);
    }

    render() {
        return (
            <View style={styles.container}>
                <FractionCalculator
                    fraction1={this.fraction1}
                    fraction2={this.fraction2}
                    calculation='+'
                />
                <FractionCalculator
                    fraction1={this.fraction1}
                    fraction2={this.fraction2}
                    calculation='-'
                />
                <FractionCalculator
                    fraction1={this.fraction1}
                    fraction2={this.fraction2}
                    calculation='*'
                />
                <FractionCalculator
                    fraction1={this.fraction1}
                    fraction2={this.fraction2}
                    calculation='/'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
