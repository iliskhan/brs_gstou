import React from 'react';
import { Text } from 'react-native';

export function DetailedPoints(props) {
  return (
    <Text 
      style={styles.detailedPoints}
    >
      Посещаемость {detailedItem.attendance}
    </Text>
    <Text 
      style={styles.detailedPoints}
    >
      Текущая атт. {detailedItem.currentSertification}
    </Text>
    <Text 
      style={styles.detailedPoints}
    >
      Рубежная атт. {detailedItem.midtermSertification}
    </Text>
    <Text 
      style={styles.detailedPoints}
    >
      Самост. работа {detailedItem.attendance}
    </Text>
  );
}