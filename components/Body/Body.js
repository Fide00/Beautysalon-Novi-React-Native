import React from 'react';
import {View} from 'react-native';
import styles from './Body.style';
import Address from '../Address/Address';
import OpeningHours from '../OpeningHours/OpeningHours';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import Contact from '../Contact/Contact';

function Body() {
  return (
    <View style={styles.container}>
      {/*Flexbox 1 met Adresgegevens*/}
      <Address />

      {/*Flexbox 2 met Openingstijden*/}
      <OpeningHours />

      {/*Flexbox 3 met Google Maps*/}
      <GoogleMaps />

      {/*Flexbox 4 met contactformulier*/}
      <Contact />
    </View>
  );
}

export default Body;
