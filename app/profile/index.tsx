import {ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Link} from "expo-router";

export default function Tab() {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={styles.container}>
            <Text>主页</Text>
            <Link href="/profile/settings" asChild>
                <Button title="Settings" />
            </Link>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});