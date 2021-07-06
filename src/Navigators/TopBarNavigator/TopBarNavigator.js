import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Header, Content, Tab, Tabs, Left, Title, Right, Button, Body } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome"
import Tab1 from '../../screens/Tab1/Tab1';
import Tab2 from '../../screens/Tab2/Tab2';
import Tab3 from '../../screens/Tab3/Tab3';
import MyHeader from '../../components/Header/Header';
import colors from '../../colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const TopBarNavigator = () => {
    return (
        <Container>
            <MyHeader />
            <Tabs
                tabBarBackgroundColor={colors.main}
                tabBarPosition="top"
                tabBarUnderlineStyle={{ backgroundColor: "#fff" }}
                tabBarInactiveTextColor={"#fff"}
            >
                <Tab
                    tabStyle={{ backgroundColor: colors.main }}
                    activeTabStyle={{ backgroundColor: colors.main }}
                    activeTextStyle={{ color: "#fff" }}
                    heading="World">
                    <Tab1 />
                </Tab>
                <Tab
                    tabStyle={{ backgroundColor: colors.main }}
                    activeTabStyle={{ backgroundColor: colors.main }}
                    activeTextStyle={{ color: "#fff" }}
                    heading="My Country">
                    <Tab2 />
                </Tab>
                <Tab
                    tabStyle={{ backgroundColor: colors.main }}
                    activeTabStyle={{ backgroundColor: colors.main }}
                    activeTextStyle={{ color: "#fff" }}
                    heading="General">
                    <Tab3 />
                </Tab>
            </Tabs>
        </Container>
    );
}

export default TopBarNavigator;

const styles = StyleSheet.create({})
