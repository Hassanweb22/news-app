import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Container, Header, Content, Tab, Tabs, Left, Title, Right, Button, Body } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome"

const MyHeader = () => {
    return (
        <Header hasTabs style={{ backgroundColor: "#009688" }}>
            <Left />
            <Body>
                <Title style={{ color: "#fff" }}>Header</Title>
            </Body>
            <Right />
        </Header>
    )
}

export default MyHeader;

const styles = StyleSheet.create({})
