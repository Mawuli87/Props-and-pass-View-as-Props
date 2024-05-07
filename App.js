import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ProfilCard } from "./components/ProfilCard";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <ProfilCard
          firstName={"Mawuli"}
          lastName={"The Dev"}
          age={200}
          isOpenToWork={true}
        >
          <View
            style={{ 
              height: "auto",
              width: "auto",
              backgroundColor: "blue",
              padding: 10,
            }}
          >
            <Text style={{ color: "white" }}>Children view pass as props</Text>
          </View>
        </ProfilCard>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
