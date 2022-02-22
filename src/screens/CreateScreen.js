import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../store/postsSlice";
import { PhotoPicker } from "../components/PhotoPicker";

export default function CreateScreen({ navigation }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [img, setImg] = useState();

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: img,
      booked: false,
    };

    dispatch(addPost(post));
    navigation.navigate("AllPosts");
    setText("");
  };

  const photoPickHendler = (uri) => {
    setImg(uri);
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создай новый пост</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Введите текст поста"
            multiline
            value={text}
            onChangeText={setText}
          />
          <PhotoPicker onPick={photoPickHendler} />
          <Button
            title="Создать пост"
            color="#303f9f"
            onPress={saveHandler}
            disabled={!text || !img}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    marginVertical: 5,
    fontSize: 20,
    fontFamily: "rb-bold",
    textAlign: "center",
  },
  textArea: {
    padding: 10,
  },
});
