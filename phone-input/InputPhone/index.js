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

const InputPhone = (props) => {
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
      if (onChangeText) {
        onChangeText({
          phoneNumber: inputText,
          countryCode: country.dialCode,
        });
      }
    } catch (e) {
      console.error("Error when try enter phone number");
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
            multiline={false}
            placeholder={placeholder}
            style={[styles.inputStyle, inputStyle]}
            value={value?.phoneNumber}
            onChangeText={onEnterPhoneNumber}
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

export default InputPhone;
