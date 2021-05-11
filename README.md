# React Native Phone Input

Phone number input field.

![](example.gif)


# Installation

```sh
npm i --save @my_name_is_nero/input-phone
```


# Basic Usage
```jsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {InputPhone} from '@my_name_is_nero/input-phone';

const styles = StyleSheet.create({
  containerStyle: {
    flex:1,
  }
});

export default function App() {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  
  return (
    <View style={styles.containerStyle}>
      <InputPhone value={phoneNumber} onChangeText={setPhoneNumber} />
    </View>
  )
}
```

# Props
By default component support all props from TextInput (multiline always set to false). Also component have additions props like (*not required):

### Phone number input field

| Name | DefaultValue | Description |
|---|---|---|
| placeholder | Enter phone number | Input phone number placeholder |
| containerStyle | | Main container style | 
| inputContainerStyle | | Phone number input container style |
| inputStyle | | Phone number input value style | 
| message | | Bottom text hint |
| messageStyle | | Bottom text hint style |
| label | | Label text |
| labelStyle | | Label text style |
| codeStyle | | Style for changing style of country code |
| flagContainerStyle | | Style for country image |

### Search query input field

| Name | Description | Default Value |
| --- | --- | --- |
| placeholderSearch | Search input placeholder | Search |
| searchInputContainerStyle | Search field container style | |
| searchInputStyle | Search field value style | |

### Country list
| Name | Description | 
| --- | --- |
| listContainerStyle | Main container style for country list | 
| listStyle | Container style for country list | 
| listContentContainerStyle | Container style for country list | 
| itemContainerStyle | Container item style inside country list | 
| itemStyle | Value style inside country list | 
| itemCodeStyle | Code style inside country list |
  
  
