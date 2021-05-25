import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  upperBox: {
    width: '50%',
    padding: 5,
  },
  underBox: {
    width: '100%',
    padding: 5,
  },
  inner: {
    flexGrow: 1,
    backgroundColor: '#ffe4e1',
    fontSize: 13,
    textAlign: 'center',
    color: 'grey',
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'dimgrey',
  },
  map: {
    flexGrow: 1,
    height: 300,
  },
  input: {
    borderWidth: 1,
    margin: 15,
    height: 40,
    borderColor: 'dimgrey',
    color: 'grey',
  },
  inputBericht: {
    margin: 15,
    height: 150,
    borderColor: 'dimgrey',
    color: 'grey',
    borderWidth: 1,
    borderRadius: 6,
    textAlignVertical: 'top',
  },
});
