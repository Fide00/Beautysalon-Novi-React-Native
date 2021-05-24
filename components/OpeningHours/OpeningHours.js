import React from 'react';
import {View, Text} from 'react-native';
import styles from '../Body/Body.style';

function OpeningHours() {
  return (
    <View style={styles.upperBox}>
      <View style={styles.inner}>
        <Text style={styles.titleText}>Openingstijden</Text>
        <Text style={styles.inner}>
          Maandag 8:30 - 17:00 {'\n'}
          Dinsdag 8:30 - 17:00 {'\n'}
          Woensdag 8:30 - 20:00 {'\n'}
          Donderdag 8:30 - 17:00 {'\n'}
          Vrijdag en zaterdag 10:00 17:00 {'\n'}
        </Text>
      </View>
    </View>
  );
}

export default OpeningHours;
