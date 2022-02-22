import * as Font from "expo-font";
import { DB } from "./db";

export async function bootApp() {
  try {
    await Font.loadAsync({
      "rb-bold": require("../assets/fonts/Roboto-Bold.ttf"),
      "rb-regular": require("../assets/fonts/Roboto-Regular.ttf"),
    });
    await DB.init();
    console.log('Database started...')
  } catch (error) {
    console.log('Error ', error)
  }
}
