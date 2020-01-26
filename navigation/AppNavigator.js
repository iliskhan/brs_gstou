import { createAppContainer, 
  createSwitchNavigator, 
  createDrawerNavigator 
} from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import GroupsScreen from '../screens/GroupsScreen'

const MySwitchNavigator = createSwitchNavigator({
  Main: {screen: GroupsScreen},
});

export default createAppContainer(
  MySwitchNavigator,
)