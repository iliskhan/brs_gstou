import { createAppContainer, 
  createSwitchNavigator, 
  createDrawerNavigator 
} from 'react-navigation';

import MainScreen from '../screens/MainScreen';

const MySwitchNavigator = createSwitchNavigator({
  Main: {screen: MainScreen},
});

export default createAppContainer(
  MySwitchNavigator,
)