import React from "react";
import { Button, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    alert(JSON.stringify(pickerResult));
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Import a photo; notice it always returns cancelled: true.</Text>
      <Button title="Pick Photo" onPress={openImagePickerAsync} />
    </View>
  );
}
