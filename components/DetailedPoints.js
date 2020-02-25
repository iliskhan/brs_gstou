import React from 'react';
import { Text, View } from 'react-native';

export function DetailedPoints(props) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text 
        style={props.styles.detailedPoints}
      >
        {props.description}
      </Text>
      <Text 
        style={props.styles.detailedPoints}
      >
        {props.data}
      </Text>
    </View>
  );
}