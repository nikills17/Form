import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-radio-buttons-group';



const Form = () => {
  const [gender, setGender] = useState('Male');

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.mainheader}>FORM</Text>
      <Text style={styles.maindescription}>Submission deadline:                 01 August</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Name  </Text>
      </View>
      <TextInput style={styles.inputStyle}
        autoCorrect={true}
        autoCapitalize="none" 
        placeholder="Nikhil Chaturvedi"/>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}> Phone </Text>
      </View>
      <TextInput style={styles.inputStyle}
        autoCorrect={true}
        autoCapitalize="none" 
        placeholder="8441865475"/>


      <View style={styles.inputContainer} >
        <Text style={styles.labels} > Address  </Text>
      </View>
      <TextInput style={styles.multiline}
        multiline={true} 
        placeholder="754-A Barkat Nagar Jaipur, Rajasthan"/>

      <View style={styles.inputContainer} >
        <Text style={styles.labels} > Gender</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.radioView}
          onPress={() => setGender('Male')} >

          <Text style={styles.radioViewText}>Male</Text>
          <RadioButton selected={gender === 'Male'} 
           onPress={() => setGender('Male')}/>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.radioView}
          onPress={() => setGender('Female')} >

          <Text style={styles.radioViewText}>Female</Text>
          <RadioButton selected={gender === 'Female'} 
           onPress={() => setGender('Female')}/>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.radioView}
          onPress={() => setGender('Other')} >

          <Text style={styles.radioViewText}>Other</Text>
          <RadioButton selected={gender === 'Other'}
           onPress={() => setGender('Other')} />
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({

  maincontainer: {
    height: '100%',
    margin: 30,


    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: '#fff',

  },

  mainheader: {
    fontSize: 30,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,

    textAlign: 'center',
  },

  maindescription: {
    fontSize: 20,
    color: '#7d7d7d',
    paddingBottom: 25,
    textAlign: 'center',
  },

  inputContainer: {

    display: 'flex',
    flexDirection: 'row',
    width: '100%',

  },
  
  labels: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputStyle: {
    width: '100%',
    height: 44,

    backgroundColor: '#f1f3f6',
    borderColor: '#fff',
    paddingHorizontal: 10,
    fontSize: 18,
  },

  multiline: {
    height: 100,
    paddingVertical: 10,
    textAlignVertical: 'top',

    backgroundColor: '#f1f3f6',
    borderColor: '#fff',
    paddingHorizontal: 10,
    fontSize: 18,
  },
  radioView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
    marginTop: 2,
  },
  radioViewText: {
    fontSize: 16,
    fontWeight: '500',
  },

});

export default Form;



























