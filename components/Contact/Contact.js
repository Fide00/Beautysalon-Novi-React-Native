import React from 'react';
import {View, Text, Alert, TextInput, Button} from 'react-native';
import styles from '../Body/Body.style';
import {Formik} from 'formik';

function Contact() {
  return (
    <View style={styles.underBox}>
      <View style={styles.inner}>
        <Text style={styles.titleText}>Contact formulier{'\n'} </Text>
        <Formik
          initialValues={{naam: '', email: '', bericht: ''}}
          onSubmit={(values) => {
            Alert.alert(JSON.stringify(values));
          }}>
          {(props) => (
            <View>
              {/*Tekstveld: naam*/}
              <TextInput
                style={styles.input}
                placeholder="Naam"
                onChangeText={props.handleChange('naam')}
                value={props.values.naam}
              />

              {/*Tekstveld: E-mailadres*/}
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={props.handleChange('email')}
                value={props.values.email}
              />
              {/*Tekstveld: Bericht*/}
              <TextInput
                style={styles.inputBericht}
                placeholder="Bericht"
                onChangeText={props.handleChange('bericht')}
                value={props.values.bericht}
              />

              {/*Bevestigknop*/}
              <Button
                title="submit"
                color="pink"
                onPress={props.handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}

export default Contact;
