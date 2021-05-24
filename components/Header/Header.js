import React from 'react';
import {View, Text} from 'react-native';
import styles from './Header.style';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.titleText}>Beautysalon Novi</Text>
    </View>
  );
}

export default Header;
