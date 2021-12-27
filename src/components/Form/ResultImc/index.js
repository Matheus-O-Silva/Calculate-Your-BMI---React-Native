import React from "react";
import styles from './style';
import { View, Text } from "react-native";
 
export default function ResultImc(props) {
  return (
    <View>
      <Text>
        {props.resultImc}
      </Text>
      <Text>
        {props.messageResultImc}
      </Text>
    </View>
  );
}