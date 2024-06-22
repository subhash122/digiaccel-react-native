import { ScrollView } from "react-native-gesture-handler";
import journey from "../assets/images/journey.jpg";
import { Image, StyleSheet, Text } from "react-native";
import { Button, List } from "react-native-paper";
import { useState } from "react";
import { router } from "expo-router";


export default function dashboard() {
    const [expanded, setExpanded] = useState(false);

    const handlePress = () => setExpanded(!expanded)
    const navigateBack=()=>{
        router.navigate('/dashboard')
    }
    return (
        <ScrollView>
            <Button style={styles.btn} icon="keyboard-backspace" onPress={navigateBack}>
                Back
            </Button>
            <Text style={{ fontWeight: 'bold', fontSize: 22, margin: 20 }}>Digital Shopper Journey</Text>

            <Image
                source={journey}
                style={styles.img}
            />
            <List.Section >
                <List.Accordion
                    title="Content List"
                    left={props => <List.Icon {...props} icon="format-list-bulleted" />}
                    expanded={expanded}
                    onPress={handlePress}>
                    <List.Item title="e commerce shopping mission" left={props => <List.Icon {...props} icon="timeline-check" />} />
                    <List.Item title="Additional reading" left={props => <List.Icon {...props} icon="timeline-check" />} />
                    <List.Item title="Shopping Missions Quiz" left={props => <List.Icon {...props} icon="timeline-check" />} />
                    <List.Item title="Swiggy Case Study" left={props => <List.Icon {...props} icon="timeline-check" />} />
                </List.Accordion>
            </List.Section>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    btn:{
        paddingHorizontal: 15,
        paddingTop: 22,
        fontWeight:'bold',
        alignItems:'flex-start',
    },
    img: {
        width: '100%',
    }
})