import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import journey from "../assets/images/journey.jpg";
import { router } from "expo-router";
export default function dashboard() {

    const navigateToItem = () => {
        router.navigate('/item');
    }
    const navigateBack=()=>{
        router.navigate('/')
    }
    let data = [{
        title: "digital Shopper Journey",
        time: 4,
    },
    {
        title: "digital Shopper Journey",
        time: 4,
    },
    {
        title: "digital Shopper Journey",
        time: 4,
    },
    ]


    return (
        <ScrollView
        >

            <Button style={styles.btn} icon="keyboard-backspace" onPress={navigateBack}>
                Back to dashboard
            </Button>
            <ScrollView alwaysBounceHorizontal={true} style={styles.scrollView} horizontal={true}>
                {data.map((item, index) => <TouchableOpacity style={styles.card} key={index} onPress={navigateToItem}>
                    <Image
                        source={journey}
                        style={styles.img}
                    />
                    <View style={{ flexShrink: 1 }}>

                        <Text style={styles.mainText}>{item.title}</Text>
                        <Text style={styles.smallText}>{item.time} learning hours left</Text>

                    </View>
                </TouchableOpacity>)}
            </ScrollView>

            <ScrollView style={styles.bottomSection}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, margin: 20 }}>Upcoming Modules</Text>
                {
                    data.map((item, index) => <TouchableOpacity key={index} style={[styles.bottomCard]} onPress={navigateToItem}>
                        <Image
                            source={journey}
                            style={styles.img}
                        />
                        <View style={{ flexShrink: 1 }}>

                            <Text style={styles.mainText}>{item.title}</Text>
                            <Text style={styles.smallText}>{item.time} learning hours left</Text>

                        </View>
                    </TouchableOpacity>)
                }
            </ScrollView>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    btn:{
        paddingHorizontal: 15,
        paddingVertical: 22,
        fontWeight:'bold',
        alignItems:'flex-start',
    },
    card: {
        backgroundColor: "#fff",
        height: 150,
        width: 350,
        borderRadius: 10,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 25,
        marginHorizontal: 20,
    },
    scrollView: {
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    mainText: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 15,
    },
    smallText: {
        fontSize: 13,
        color: 'blue',
        fontWeight: 'bold',
        paddingHorizontal: 15
    },
    bottomSection: {
        marginTop: 20,
        backgroundColor: 'white',
    },
    bottomCard: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        // width:"80%",
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 25,
        marginHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10
    }
});