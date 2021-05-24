import React from 'react';
import {View, Text} from 'react-native';
import styles from '../Body/Body.style';

function Address() {
  return (
    <View style={styles.upperBox}>
      <View style={styles.inner}>
        <Text style={styles.titleText}>Adres</Text>
        <Text style={styles.inner}>
          Beautysalon Nov{'\n'}
          Zonnebaan 9{'\n'}
          3542EA Utrecht{'\n'}
          035-1234567{'\n'}
        </Text>
      </View>
    </View>
  );
}

export default Address;
