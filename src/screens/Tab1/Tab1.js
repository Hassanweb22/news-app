import { Body, Button, Container, Content, Left, List, ListItem, Right, Thumbnail } from 'native-base'
import React from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'
import MyHeader from '../../components/Header/Header'
import { getArticles } from "../../services/news"

const Tab1 = () => {

    React.useLayoutEffect(() => {
        const getData = getArticles()
        console.log("getData", getData)
    }, [])

    return (
        <Container style={{ borderWidth: 0 }}>
            <Content padder >
                <List style={{ borderWidth: 0, marginVertical: 4 }}>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail source={{ uri: 'https://www.seekpng.com/png/full/351-3517548_associate-development-icon-user-icon.png' }} />
                        </Left>
                        <Body>
                            <Text>Sankhadeep</Text>
                            <Text note numberOfLines={2}>
                                Its time to build a difference . .
                                Its time to build a difference . .
                            </Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>View</Text>
                            </Button>
                        </Right>
                    </ListItem>
                </List>
                <List style={{ borderWidth: 0, marginVertical: 4 }}>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail source={{ uri: 'https://www.seekpng.com/png/full/351-3517548_associate-development-icon-user-icon.png' }} />
                        </Left>
                        <Body>
                            <Text>Sankhadeep</Text>
                            <Text note numberOfLines={2}>
                                Its time to build a difference . .
                                Its time to build a difference . .
                            </Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>View</Text>
                            </Button>
                        </Right>
                    </ListItem>
                </List>
                <List style={{ borderWidth: 0, marginVertical: 4 }}>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail source={{ uri: 'https://www.seekpng.com/png/full/351-3517548_associate-development-icon-user-icon.png' }} />
                        </Left>
                        <Body>
                            <Text>Sankhadeep</Text>
                            <Text note numberOfLines={2}>
                                Its time to build a difference . .
                                Its time to build a difference . .
                            </Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>View</Text>
                            </Button>
                        </Right>
                    </ListItem>
                </List>
            </Content>
        </Container>
    )
}

export default Tab1

const styles = StyleSheet.create({})
