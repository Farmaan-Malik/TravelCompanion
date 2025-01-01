import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Animated,
    StyleSheet, FlatList
} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {globalStyles} from "@/assets/styles/globalStyles";
import LinearGradient from "react-native-linear-gradient";
import {Colors} from "@/assets/colors/colors";
import Header from "@/components/Header";
import {SvgXml} from "react-native-svg";
import Ionicons from "@expo/vector-icons/Ionicons";
import SpotCard from "@/components/SpotCard";
import UserCard from "@/components/UserCard";
import LargeSpotCard from "@/components/LargeSpotCard";
import { screenHeight, screenWidth} from "@/app/_layout";
import OutlineButton from "@/components/OutlineButton";
import {useStore} from "@/utils/store";

const Index = () => {
    const progress = useRef(new Animated.Value(0)).current;
    const exit = useRef(new Animated.Value(0)).current;
    const {svg, username} = useStore(state => state);
    let name = username;
    const newSvg = svg;
    const arr = ['sada','asdad','asdadsa','sadasdasda','asdsahgjdghjsa']
    const scrollViewRef = useRef<FlatList>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showDetails, toggleShowDetails] = useState(false);
    // Function to handle scroll event
    const handleScroll = (event: any) => {
        const scrollX = event.nativeEvent.contentOffset.x;
        const cardWidth = 270; // Adjust this to match your SpotCard width + margin
        const index = Math.round(scrollX / cardWidth); // Determine which item is centered
        setSelectedIndex(index);
    };

    useEffect(() => {
        Animated.spring(progress, {
            toValue: 1,
            useNativeDriver: false,
            stiffness: 30,
        }).start();
    }, []);

    return (
        <SafeAreaView
            edges={['top']}
            style={[
                globalStyles.container,
            ]}
        >

            <Animated.View
                style={[
                    globalStyles.mainView,
                    {
                        transform: [
                            {
                                scale: exit.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 5],
                                }),
                            },
                        ],
                    },
                ]}
            >
                <Header
                    onPress1={() => {
                    }}
                    onPress2={() => {
                    }}
                />
                {!showDetails && (
                    <Animated.View style={[styles.detailsContainer, {
                        transform: [
                            {
                                translateY: progress.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-50, 0],
                                }),
                            },
                        ],
                    }]}>
                        <View style={[styles.headerMessageContainer]}>
                            <View
                                style={{
                                    paddingHorizontal: 20,
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Animated.View
                                    style={[styles.animatedText,
                                        {
                                            transform: [
                                                {
                                                    translateX: progress.interpolate({
                                                        inputRange: [0, 1],
                                                        outputRange: [-900, 0],
                                                    }),
                                                },
                                            ]
                                        }
                                    ]}
                                >
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={{fontSize: 20, fontFamily: "Nunito-Regular"}}>
                                            Hey{' '}
                                        </Text>
                                        <Text style={{fontSize: 25, fontFamily: 'Nunito-ExtraBold'}}>
                                            {`${name}!`}
                                        </Text>
                                    </View>

                                    <Text style={{fontSize: 15, fontFamily: "Nunito-ExtraLight"}}>
                                        Where is your next trip going to be?
                                    </Text>
                                </Animated.View>
                                <View style={styles.svgContainer}>
                                <SvgXml
                                    style={[styles.svg]}
                                    xml={newSvg}
                                />
                                </View>
                            </View>
                            <TouchableOpacity
                                style={{height: 30, width: '60%'}}
                                onPress={() => {
                                    /* TODO */
                                }
                                }
                            >
                                <LinearGradient
                                    style={[styles.locationGradient]}
                                    start={{x: 0.6, y: 1}}
                                    end={{x: 1, y: 1}}
                                    colors={Colors.GreenGradient}
                                >
                                    <Ionicons size={24} color={"white"} name="location-sharp"/>
                                    <Text
                                        style={[styles.locationText]}
                                        ellipsizeMode="tail"
                                        numberOfLines={1}
                                    >
                                        Placeholder Location, something else
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={[styles.scrollView]}
                        >
                            <View
                                style={[styles.horizontalScrollContainer]}
                            >
                                <Text
                                    style={[styles.sectionHeaderText,{paddingLeft:20}]}
                                >
                                    Near your location
                                </Text>
                                <FlatList
                                    ref={scrollViewRef}
                                    horizontal
                                    onScroll={handleScroll}
                                    data={arr}
                                    scrollEventThrottle={16}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={({index})=>
                                        <SpotCard
                                        onPress={() => {
                                            setSelectedIndex(index);
                                            toggleShowDetails(true);

                                        }}
                                        key={index}
                                        selected={index === selectedIndex}
                                    />}
                                    contentContainerStyle={[styles.horizontalScrollContent]}
                                >
                                </FlatList>
                            </View>
                            <View
                                style={[styles.sectionHeader]}
                            >
                                <Text
                                    style={[styles.sectionHeaderText]}
                                >
                                    Find Trip Partners!
                                </Text>
                                <OutlineButton title={'See all'}/>
                            </View>
                            <View
                                style={[styles.tripPartnerContainer]}
                            >
                                {Array(3)
                                    .fill(null)
                                    .map((_, index) => (
                                        <UserCard key={index}/>
                                    ))}
                            </View>
                        </ScrollView>
                    </Animated.View>
                )}
                {showDetails && (
                    <>
                        <ScrollView
                            style={{
                                width: "100%",
                            }}
                            contentContainerStyle={{
                                width: "100%",
                                paddingBottom: 200,
                                alignItems: "center",
                            }}
                        >
                            <LargeSpotCard
                                style={{
                                    shadowColor: "black",
                                    shadowOpacity: 0.2,
                                    shadowRadius: 10,
                                    backgroundColor: "white",
                                    elevation: 5,
                                    shadowOffset: {width: 0, height: 10},
                                }}
                                width={100}
                                height={75}
                            />
                            <View
                                style={{
                                    width: "100%",
                                    height: Dimensions.get("window").height / 18,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginVertical: "3%",
                                    gap: 10,
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        height: 30,
                                        width: '22%',
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: "10%",
                                        backgroundColor: "#FF2800",
                                        borderRadius: 50,
                                        flexDirection: 'row'
                                    }}
                                    onPress={() => {
                                        toggleShowDetails(false)
                                    }}
                                >
                                    <Ionicons name="close-outline" color={"white"} size={20}/>
                                    <Text style={{
                                        fontFamily: "Nunito-Bold",
                                        color: "white",
                                        borderRadius: 50,
                                        textAlign: "center",
                                        fontSize: 16,
                                    }}>Close</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        height: "80%",
                                        width: "50%",
                                        // borderWidth: 2,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: "10%",
                                    }}
                                >
                                    <LinearGradient
                                        style={{
                                            borderRadius: 50,
                                            height: '95%',
                                            width: "100%",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "row",
                                            // shadowColor: "black",
                                            // shadowOpacity: 0.2,
                                            // shadowRadius: 4,
                                            // elevation: 5,
                                            // shadowOffset: { width: 0, height: 8 },
                                        }}
                                        colors={Colors.SecondaryCardGradient}
                                        start={{x: 0, y: 0}}
                                        end={{x: 1, y: 1}}
                                    >
                                        <Ionicons color={"white"} size={20} name="walk-outline"/>
                                        <Text
                                            style={{
                                                fontFamily: "Nunito-SemiBold",
                                                color: "white",
                                                borderRadius: 100,
                                                textAlign: "center",
                                                fontSize: 16,
                                            }}
                                        >
                                            Send Request
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>

                            <Text
                                style={{
                                    width: "100%",
                                    marginTop: "5%",
                                    fontSize: 22,
                                    fontFamily: "Nunito-SemiBold",
                                    paddingHorizontal: 20,
                                    marginBottom: 5,
                                }}
                            >
                                From Farmaan:
                            </Text>
                            <LinearGradient
                                colors={Colors.PrimaryGradient}
                                start={{x: 0, y: 1}}
                                end={{x: 1, y: 1}}
                                style={{
                                    height: "auto",
                                    width: "90%",
                                    borderRadius: 20,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 5,
                                    flexDirection: "row",
                                    shadowColor: "black",
                                    shadowOpacity: 0.5,
                                    shadowRadius: 8,
                                    elevation: 5,
                                    shadowOffset: {width: 0, height: 5},
                                }}
                            >
                                <SvgXml
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderWidth: 0.4,
                                        borderRadius: 50,
                                        borderColor: "white",
                                        overflow:'hidden'
                                    }}
                                    xml={svg}
                                />
                                <Text
                                    style={{
                                        padding: 10,
                                        width: "80%",
                                        color: "white",
                                        fontFamily: "Nunito-SemiBold",
                                    }}
                                >
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Possimus dicta ratione pariatur a laudantium error
                                    consequuntur quas aperiam aspernatur quibusdam vel commodi,
                                    tempore voluptatum porro est ab odit animi impedit sed non!
                                </Text>
                            </LinearGradient>
                        </ScrollView>
                    </>
                )}
            </Animated.View>
        </SafeAreaView>
    );
};

export default Index;

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
    },
    headerMessageContainer: {
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
        height: screenHeight / 5,
        shadowColor: "black",
        shadowOpacity: 0.2,
        backgroundColor: "white",
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 10},
        alignItems: "center",
        justifyContent: 'space-evenly',
        elevation: 2,
    },
    scrollView: {},
    horizontalScrollContent: {
        alignItems: "center",
        paddingHorizontal: screenWidth / 3, // Center the first and last cards
        marginVertical: 20,
    },
    locationGradient: {
        flex: 1,
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 13,
        flexDirection: "row",
        elevation: 10,
        gap: 10,
    },
    animatedText: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    svg: {
        width: 70,
        height: 70,
        borderColor: "black",
    },
    svgContainer:{
        width: 70,
        height: 70,
        overflow: "hidden",
        borderRadius: 50,
        borderWidth: StyleSheet.hairlineWidth,
        elevation: 1,
    },
    locationText: {
        color: "white",
        fontFamily: "Nunito-ExtraBold",
        fontSize: 14,
        width: "80%",
    },
    horizontalScrollContainer: {
        width: "100%",
        paddingTop: 15,
    },
    sectionHeader:{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
        flex:1
    },
    sectionHeaderText:{
        textAlign: "left",
        fontSize: 21,
        fontFamily: "Nunito-Medium",
        flex:1
    },
    tripPartnerContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        paddingVertical:20
    }
})