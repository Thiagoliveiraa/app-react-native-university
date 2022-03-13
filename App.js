import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("The button was clicked.");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <Text>I'm Batman</Text>
      <Text>
        Two years of stalking the streets as the Batman, striking fear into the
        hearts of criminals, has led Bruce Wayne deep into the shadows of Gotham
        City. With only a few trusted allies—Alfred Pennyworth, Lt. James
        Gordon—amongst the city corrupt network of officials and high-profile
        figures, the lone vigilante has established himself as the sole
        embodiment of vengeance amongst his fellow citizens.
      </Text>
      <Button title="Click on" onPress={handlePress} color="green" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "200",
  },
});
