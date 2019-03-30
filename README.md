# SimpleMVCReactNative
Simple MVC in React Native

# 1. ABOUT MVC:
- <b>Model</b>: is used to store our data (this is main reason we have model) and do simple stuff such as 'toString',...
- <b>View</b>: is used to display data to users
- <b>Controller</b>: is a adapter between <b>Model</b> and <b>View</b>, <b>Controller</b> is used to process data from <b>Model</b> and send to <b>View</b> to display to users
# 2. APPLY IN EXAMPLE ABOUT FRACTION CALCULATOR (ADD, SUB, MULTIPLY, DIV)
- Firstly, we need a <b>Model</b> 'Fraction' to store our data: a Fraction has 2 attributes: numerator and denominator. In <b>Model</b> 'Fraction' we also have some simple functions such as: 
  + isNumeratorZero() => check if numerator is zero
  + isDenominatorZero() => check if denominator is zero
  + toString() => get 'Fraction' string to show to users
I also need a Model 'Message' to store returned result and message to let users know what's happening or if calculation is perform successfully
- Secondly, we need a <b>Controller</b> 'FractionController' to calculate: add 2 fractions, sub 2 fractions, multiply 2 fractions, div 2 fractions => I group all these calculations into a function named 'cal2Fractions'
- Finally, we need a <b>View</b> to show data to users, in react-native we called it is a component => I create a component 'FractionCalculator' with 3 attributes: 'fraction1', 'fraction2', 'calculation' => we pass these to component 'FractionCalculator' and get them as 'props', then we proceed to calculate and show result to users
