import React from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import styles from './App.style';

function App() {
  return (
    <View style={styles.appContainer}>
      <ScrollView>
        <Header />
        {/*De Body is contactpagina waarin de Google Maps kaart en het contactformulier zich in bevinden.*/}
        <Body />
        <Footer />
      </ScrollView>
    </View>
  );
}

export default App;
