import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { cal2Fractions } from '../controllers/FractionController';

export default class FractionCalculator extends Component<Props> {

    constructor(props: Props) {
        super(props);

        this.state = {
            fraction1: this.props.fraction1,
            fraction2: this.props.fraction2,
            fractionMsg: null,
            calculation: this.props.calculation,
        }
    }

    componentWillMount() {
        this.calculate();
    }

    calculate() {
        this.setState({
            fractionMsg: cal2Fractions(this.state.fraction1, this.state.fraction2, this.state.calculation)
        });
    }

    render() {
        if (!this.state.fractionMsg.result)
            return <Text style={styles.text}>{this.state.fractionMsg.message}</Text>

        return (
            <Text style={styles.text}>{this.state.fraction1.toString()} {this.state.calculation} {this.state.fraction2.toString()} = {this.state.fractionMsg.result.toString()}</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
    },
});