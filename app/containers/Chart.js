import React from 'react';
import { random, range, round } from "lodash";
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';

import Svg from "react-native-svg";
import {
  /*
VictoryAxis,
VictoryGroup,
VictoryStack,
VictoryCandlestick,
VictoryErrorBar,
VictoryBar,
VictoryArea,
VictoryScatter,
VictoryTooltip,
VictoryZoomContainer,
VictorySelectionContainer,
VictoryBrushContainer,
VictoryCursorContainer,
VictoryLabel,
VictoryLegend,
createContainer,
VictoryPortal,
Bar*/
  VictoryVoronoiContainer,
  VictoryPie,
  VictoryChart,
  VictoryLine,
} from "victory-native";

import { View, ScrollView } from 'react-native';
import { Button, Text } from 'native-base';


// Ce container fait une connection avec le store de redux mais ne l'utilise jamais. (Fin du fichier)
// C'est surtout un container pour montrer la librairie Victory

class Chart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollEnabled: true,
            randomData: this.generateRandomData(),
            staticRandomData: this.generateRandomData(15),
        };
    }

    changeScroll(scrollEnabled) {
        this.setState({ scrollEnabled });
    }

    generateRandomData(points = 6) {
        return range(1, points + 1).map((i) => ({ x: i, y: i + random(-1, 2) }));
    }

    updateDemoData() {
        this.setState({
            randomData: this.generateRandomData(),
        });
    }

    // Fonction propre a react qui est execute par elle meme lorsque le component est charge
    // https://reactjs.org/docs/react-component.html#componentdidmount
    componentDidMount() {
        // Decommenter pour voir les datas changer dans les graphiques
        //setInterval(this.updateDemoData.bind(this), 3000);
    }

    render() {

        return (
            <ScrollView>

                <Text style={{ textAlign: 'center', marginTop: 20 }}>VictoryLine Demo</Text>

                <VictoryChart
                    containerComponent={
                        <VictoryVoronoiContainer
                            onTouchStart={() => this.changeScroll(false)}
                            onTouchEnd={() => this.changeScroll(true)}
                            labels={(d) => `( ${d.x} , ${d.y} )`}
                        />
                    }>
                    <VictoryLine data={this.state.randomData} animate={{ duration: 1000 }} />
                </VictoryChart>


                <VictoryPie
                    innerRadius={75}
                    labelRadius={125}
                    style={{ labels: { fontSize: 20 } }}
                    data={this.state.randomData}
                    animate={{ duration: 1500 }}
                />

            </ScrollView>
        )
    }
}

// Inutile ici mais je le laisse pour boilerplate
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

// Inutile ici mais je le laisse pour boilerplate
function mapStateToProps(state) {
  return {};
};

export default connect(() => mapStateToProps, mapDispatchToProps)(Chart);