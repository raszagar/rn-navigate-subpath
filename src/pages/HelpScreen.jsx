import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export const HelpScreen = () => {
    navigation = useNavigation();

    const onPressButton = () => {
        navigation.navigate('home');
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is Help page</Text>
            <Button
                onPress={onPressButton}
                title="Go to Home"
            />
        </View>
    );
}