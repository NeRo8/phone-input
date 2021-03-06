import React from "react";
import {
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";

export type PhoneNumber = {
  countryCode: string;
  phoneNumber: string;
  phoneWithMask?: string;
};

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
  value: PhoneNumber;
  onChangeText: (value: PhoneNumber) => void;
}

export interface IInputPhoneWithMaskProps extends IInputPhoneProps {
  mask: string;
}

declare class InputPhone extends React.PureComponent<IInputPhoneProps, any> {}

declare class InputPhoneWithMask extends React.PureComponent<
  IInputPhoneWithMaskProps,
  any
> {}

export { InputPhone, InputPhoneWithMask };
