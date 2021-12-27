import React, {useState} from "react";
import {
   View, 
   Text, 
   TextInput, 
   TouchableOpacity, 
   Vibration
  } from "react-native";
import styles from './style';
import ResultImc from "./ResultImc/";

 
export default function Form(props) {
  
  const [height, setHeight] = React.useState(null);
  const [weight, setWeight] = React.useState(null);
  const [messageImc, setMessageImc] = useState("preencha o peso e altura");
  const [errorMessage, setErrorMessage] = useState(null);

  <Text style={styles.errorMessage}>{errorMessage}</Text>
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  <Text style={styles.errorMessage}>{errorMessage}</Text>

  function imcCalculator(){
    return setImc((weight / (height * height)).toFixed(2));
 }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é igual:")
      setTextButton("Calcular Novamente")
      setErrorMessage(null);
      return
    }
    verificationImc();
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencha o peso e altura")
  }

  function verificationImc(){
    if(imc == null){
     Vibration.vibrate(); 
     setErrorMessage("campo obrigatório*")
    }
  }
    
  return (
    <View style={styles.formContext}>

      <View style={styles.form}>
        <Text style={styles.formLabel}>Height</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput style={styles.input}
        onChangeText={setHeight}
        value={height}
        placeholder="Ex.: 1.74"
        keyboardType="numeric"
        />

        <Text style={styles.formLabel}>Weight</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput style={styles.input}
        onChangeText={setWeight}
        value={weight}
        placeholder="Ex.: 1.74"
        keyboardType="numeric"
        />

        <TouchableOpacity
        onPress={() =>{
          validationImc()
        }}
        style={styles.buttonCalculator}>
        <Text style={styles.textButtonCalculator}> Calculate </Text>
        </TouchableOpacity>

      </View>

      <ResultImc messageResultImc={messageImc} resultImc={imc} />

    </View>
  );
}