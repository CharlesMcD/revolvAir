import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Container, Content, Button, Body, Icon, Text, List, ListItem, Spinner } from 'native-base';

class ReduxExample extends React.Component {
    constructor(props) {
        super(props)
        this.state = { searching: false, ingredientsInput: '' }
    }

    addMovie() {
        this.props.addMovie();
    }

    searchPostsPressed() {
        this.setState({searching : true});

        this.props.fetchMovies().then(() => {
            this.setState({searching : false});
        });
    }

    movies() {
        return Object.keys(this.props.searchedMovies).map( key => this.props.searchedMovies[key]);
    }

    render() {
        return (
            <Container>
                <Content padder>

                <Text style={{marginTop: 20}}>
                    Movie count : {this.props.movieCount}
                </Text>
                <Button onPress={() => {this.addMovie() }}>
                    <Text>
                        INCREMENT
                    </Text>
                </Button>

                <Button onPress={() => {this.searchPostsPressed() }} style={{marginTop: 30}}>
                    <Text>
                        API GET
                    </Text>
                </Button>

                {this.state.searching ? <Spinner /> : null}

                <ScrollView style={{backgroundColor:"white"}}>
                    <List>
                        {this.movies().map(function (movie, i) {
                            return <ListItem key={i}>
                                <Text>
                                    {movie.title}
                                </Text>
                            </ListItem>
                        })}
                    </List>
                </ScrollView>
                </Content>
          </Container>
        );
    }
}

export default ReduxExample;