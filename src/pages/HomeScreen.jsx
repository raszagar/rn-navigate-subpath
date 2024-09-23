import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export const HomeScreen = () => {
    navigation = useNavigation();


    const onPressButton = () => {
        navigation.navigate('help');
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is Home page</Text>
            <Button
                onPress={onPressButton}
                title="Go to Help"
            />
        </View>
    );
}