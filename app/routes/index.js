import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import Colors from '../../node_modules/native-base/src/theme/variables/commonColor';

import AppContainer from '../containers/AppContainer';
import Map from '../containers/Map';
import Chart from '../containers/Chart'

const DefaultProps = {
    navbarProps: {
        navigationBarStyle: { backgroundColor: 'white' },
        titleStyle: {
          color: Colors.textColor,
          alignSelf: 'center',
          letterSpacing: 2,
          fontSize: Colors.fontSizeBase,
        },
        backButtonTintColor: Colors.textColor,
      },
    
      tabProps: {
        swipeEnabled: true,
        activeBackgroundColor: 'rgba(255,255,255,0.1)',
        inactiveBackgroundColor: Colors.brandPrimary,
        tabBarStyle: { backgroundColor: Colors.brandPrimary },
      },
    
      icons: {
        style: { color: 'white' },
      },
  };


const Index = (
    <Stack>
      <Scene hideNavBar>
      <Tabs
        key="tabbar"
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="chart"
          title="Chart"
          icon={() => <Icon name="planet" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="chartContainer" component={Chart} />
        </Stack>

        <Stack
          key="movie"
          title="MOVIE REDUX EXPERIMENTAL"
          icon={() => <Icon name="thermometer" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="appContainer" component={AppContainer} />
        </Stack>

        <Stack
          key="map"
          title="MAP"
          icon={() => <Icon name="map" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="map" component={Map} />
        </Stack>

      </Tabs>
    </Scene>
    </Stack>
  );
  
  export default Index;