import React from 'react';
import {View, Text} from 'react-native';
import styles from '../Body/Body.style';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

function GoogleMaps() {
  return (
    <View style={styles.underBox}>
      <View style={styles.inner}>
        <Text style={styles.titleText}>Google maps</Text>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
            latitude: 52.117471,
            longitude: 5.039224,
            latitudeDelta: 0.0023,
            longitudeDelta: 0.023,
            zoom: 25,
          }}>
          <Marker
            coordinate={{latitude: 52.117471, longitude: 5.039224}}
            title={'Beautysalon Novi'}
          />
        </MapView>
      </View>
    </View>
  );
}

export default GoogleMaps;
