import {NativeTabs, Badge, Icon, Label, VectorIcon} from 'expo-router/unstable-native-tabs';
import {Ionicons, FontAwesome, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

export default function TabLayout() {
    return (
        <NativeTabs>
            <NativeTabs.Trigger name="da">
                <Label>找搭子</Label>
                <Icon src={<VectorIcon family={FontAwesome} name="search" />} />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="square">
                <Label>广场</Label>
                <Icon src={<VectorIcon family={MaterialIcons} name="explore" />} />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="messages">
                <Label>消息</Label>
                <Icon src={<VectorIcon family={Ionicons} name="chatbubbles" />} />
                <Badge>9+</Badge>
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="profile">
                <Label>我</Label>
                <Icon src={<VectorIcon family={MaterialCommunityIcons} name="face-man" />} />
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}