import React, {useState} from "react";
import { View, Text, TextInput, Button} from "react-native";
import ResultImc from "../ResultImc";
 
export default function Form() {
  
  const[height, setHeight]            = useState(null)
  const[weight, setWeight]            = useState(null)
  const[messageImc, setMessageImc]    = useState("Type your Height and your Weight")
  const[imc, setImc]                  = useState(null)
  const[TextButton, setTextButton]    = useState("Calculate")

  function imcCalculator(){
      return setImc((weight/(height*height)).toFixed(2))
  }

    function validationImc(){
        if(weight != null&& height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Your BMI is:")
            setTextButton("Calculate again")
            return
        }
        setImc(null)
        setTextButton("calculate")
        setMessageImc("Type your Height and your Weight")
    }
    
  return (
    <View>
        <View>
            <Text>Height</Text>
            <TextInput
            onChangeText={setHeight}
            value={height}
            placeholder="Ex.: 1.83" keyboardType="numeric"
            />
            
            <Text>Weight</Text>
            <TextInput
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex.: 75.369" keyboardType="numeric"
            />

            <Button
            onPress={() => validationImc()}
            title={TextButton} />
        </View>
        <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}