import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { getFlag, COUNTRIES } from "../config";

import styles from "./styles";

const InputPhoneWithMask = (props) => {
  const {
    containerStyle,
    inputContainerStyle,
    inputStyle,
    placeholder = "Enter phone number",
    label,
    labelStyle,
    message,
    messageStyle,
    codeStyle,
    listStyle,
    listContainerStyle,
    listContentContainerStyle,
    onChangeText,
    value,
    searchInputStyle,
    placeholderSearch = "Search",
    searchInputContainerStyle,
    itemContainerStyle,
    itemStyle,
    itemCodeStyle,
    flagContainerStyle,
    mask,
    editable = true,
  } = props;
  const [country, setCountry] = useState(COUNTRIES[0]);
  const [isListVisible, setListVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountries, setFilteredCountries] = useState();

  const onChangeListVisible = () => setListVisible(!isListVisible);

  useEffect(() => {
    const result = COUNTRIES.filter((itemCountry) =>
      itemCountry.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredCountries(result);
  }, [searchQuery]);

  const onEnterPhoneNumber = (inputText) => {
    try {
      const clearValue = inputText.replace(/\(|\)|#|-/g, "");

      const maskArray = mask.split("");
      let selectedIndex = 0;

      let canEnterPhoneNumber = inputText.includes("#");

      const phoneWithMask = maskArray
        .map((item) => {
          if (item === "#" && selectedIndex < clearValue.length) {
            selectedIndex += 1;
            return clearValue[selectedIndex - 1];
          }
          return item;
        })
        .join("");

      if (
        inputText.length > value.phoneWithMask.length &&
        canEnterPhoneNumber
      ) {
        onChangeText({
          phoneNumber: clearValue,
          countryCode: country.dialCode,
          phoneWithMask: phoneWithMask,
        });
      }
    } catch (e) {
      console.error("Error when try enter phone number");
    }
  };

  const onPressKey = ({ nativeEvent }) => {
    if (nativeEvent.key === "Backspace") {
      const clearValue = value.phoneNumber.slice(
        0,
        value.phoneNumber.length - 1
      );

      const maskArray = mask.split("");
      let selectedIndex = 0;

      const phoneWithMask = maskArray
        .map((item) => {
          if (item === "#" && selectedIndex < clearValue.length) {
            selectedIndex += 1;
            return clearValue[selectedIndex - 1];
          }
          return item;
        })
        .join("");

      onChangeText({
        phoneNumber: clearValue,
        countryCode: value.countryCode,
        phoneWithMask: phoneWithMask,
      });
      return;
    }
  };

  const renderItem = ({ item }) => {
    const onPressItem = () => {
      setCountry(item);
      setListVisible(false);
    };
    return (
      <TouchableOpacity onPress={onPressItem}>
        <View style={[styles.itemContainerStyle, itemContainerStyle]}>
          <View style={styles.codeContainerStyle}>
            <View style={styles.flagContainerStyle}>
              <Image
                source={getFlag(item.iso2)}
                style={styles.flagStyle}
                resizeMode="stretch"
              />
            </View>
            <Text style={[styles.itemCodeStyle, itemCodeStyle]}>
              +{item.dialCode}
            </Text>
          </View>
          <Text style={[styles.itemStyle, itemStyle]}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <View>
        {label && <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>}
        <View style={[styles.inputContainerStyle, inputContainerStyle]}>
          <TouchableOpacity
            disabled={!editable}
            style={styles.codeContainerStyle}
            onPress={onChangeListVisible}
          >
            <Image
              source={getFlag(country.iso2)}
              style={[styles.flagContainerStyle, flagContainerStyle]}
              resizeMode="contain"
            />
            <Text style={[styles.codeStyle, codeStyle]}>
              +{country.dialCode}
            </Text>
          </TouchableOpacity>
          <TextInput
            {...props}
            editable={editable}
            multiline={false}
            placeholder={placeholder || mask}
            style={[styles.inputStyle, inputStyle]}
            value={value?.phoneWithMask}
            onChangeText={onEnterPhoneNumber}
            onKeyPress={onPressKey}
            keyboardType="numeric"
          />
        </View>
        {message && (
          <Text style={[styles.messageStyle, messageStyle]}>{message}</Text>
        )}
      </View>

      {isListVisible && (
        <View style={[styles.listContainerStyle, listContainerStyle]}>
          <View
            style={[
              styles.searchInputContainerStyle,
              searchInputContainerStyle,
            ]}
          >
            <TextInput
              placeholder={placeholderSearch}
              style={[styles.searchInputStyle, searchInputStyle]}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <FlatList
            data={filteredCountries || COUNTRIES}
            renderItem={renderItem}
            style={[styles.listStyle, listStyle]}
            contentContainerStyle={[
              styles.listContentContainerStyle,
              listContentContainerStyle,
            ]}
            keyExtractor={(item) => item.iso2}
          />
        </View>
      )}
    </View>
  );
};

export default InputPhoneWithMask;
