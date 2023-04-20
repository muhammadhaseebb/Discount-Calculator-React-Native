/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {React, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [rs, setRs] = useState('');
  const [discount, setDiscount] = useState('');
  const [final, setFinal] = useState('');
  const [saved, setSaved] = useState('');
  const [history, setHistory] = useState([]);
  const [newSave, setNewSave] = useState('');

  const handlePress = () => {
    const rupee = parseInt(rs);
    const dis = parseInt(discount);
    const s = (rupee / 100) * dis;
    const f = rupee - s;

    const frupee = ' Rs.' + f;
    setFinal(frupee);

    const srupee = ' Rs.' + s;
    setSaved(srupee);

    const si = `${rupee} - ${dis} = ${f}`;
    setNewSave(si);
  };
  const handleSave = () => {
    if (newSave.trim() === '') return;

    setHistory([...history, newSave]);
    setNewSave('');
  };

  const deletetask = index => {
    let hist = [...history];
    hist.splice(index, 1);
    setHistory(hist);
  };

  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#222831',
      }}>
      <View style={styles.heading}>
        <Text style={styles.headingTxt}>Discount Calculator</Text>
      </View>
      <Image source={require('./assets/ill.png')} style={styles.img} />
      <Button
        icon="content-save-outline"
        textColor="orange"
        style={{
          alignSelf: 'flex-end',
          marginRight: 30,
        }}
        onPress={handleSave}>
        Save
      </Button>

      <View style={styles.body}>
        <TextInput
          keyboardType="numeric"
          underlineColor="transparent"
          style={styles.inputss}
          label="Price in Rs."
          value={rs}
          onChangeText={text => setRs(text)}
          left={<TextInput.Icon icon={'cash'} />}
          theme={{colors: {text: 'white'}}}
        />
        <TextInput
          keyboardType="numeric"
          underlineColor="transparent"
          style={styles.inputss}
          label="Discount Percentage"
          value={discount}
          onChangeText={text => setDiscount(text)}
          left={<TextInput.Icon icon={'cash-minus'} />}
        />
        <Button textColor="white" onPress={handlePress} style={styles.calBtn}>
          Calculate
        </Button>

        {/* Output */}
        <View style={styles.output}>
          <Text style={{color: 'white', fontSize: 16}}>You Saved:{saved}</Text>
        </View>
        <View style={styles.output}>
          <Text style={{color: 'white', fontSize: 16}}>
            Final Price:{final}
          </Text>
        </View>

        {/* History */}
        <Text style={{fontSize: 20, marginVertical: 10, fontWeight: 'bold'}}>
          History:
        </Text>
        <Text>Original Price – Discount = Final Price</Text>

        <ScrollView>
          {history.map((Rupees, index) => (
            <View style={styles.history} key={index}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View style={styles.count}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 10,
                    }}>
                    {index + 1}
                  </Text>
                </View>

                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    maxWidth: 190,
                  }}>
                  {Rupees}
                </Text>
                <Button
                  icon="delete"
                  textColor="orange"
                  key={index}
                  onPress={() => deletetask(index)}></Button>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: 'black',
    alignItems: 'center',
    width: '100%',
  },
  textheads: {
    color: 'black',
    textAlign: 'left',
    fontSize: 16,
    color: 'white',
  },

  body: {
    justifyContent: 'center',
    width: '80%',
  },
  inputss: {
    height: 50,
    marginBottom: 10,
    borderWidth: 0.5,
    opacity: 0.5,
    borderRadius: 5,
  },
  img: {
    width: 200,
    height: 110,
    marginTop: 25,
    opacity: 0.5,
  },
  headingTxt: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'medium',
    fontFamily: 'Billabong',
    marginTop: 20,
    width: '100%',
    textAlign: 'center',
  },
  calBtn: {
    padding: 3,
    borderRadius: 100,
    width: '50%',
    alignSelf: 'center',
    marginBottom: 5,
    backgroundColor: 'orange',
  },
  output: {
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 10,
  },
  history: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderRadius: 10,
  },
  count: {
    backgroundColor: 'orange',
    width: 20,
    height: 20,
    marginHorizontal: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
