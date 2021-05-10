import React from "react";
import { TextInputProps, ViewStyle, TextStyle, ImageStyle } from "react-native";

export interface IInputPhoneProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  message?: string;
  messageStyle?: StyleProp<ViewStyle>;
  codeStyle?: StyleProp<TextStyle>;
  listStyle?: StyleProp<ViewStyle>;
  listContainerStyle?: StyleProp<ViewStyle>;
  listContentContainerStyle?: StyleProp<ViewStyle>;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  searchInputStyle?: StyleProp<TextStyle>;
  placeholderSearch?: string;
  searchInputContainerStyle?: StyleProp<ViewStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<TextStyle>;
  itemCodeStyle?: StyleProp<TextStyle>;
  flagContainerStyle?: StyleProp<ImageStyle>;
}

declare class PhoneInput extends React.PureComponent<IInputPhoneProps, any> {}

export default { PhoneInput };
