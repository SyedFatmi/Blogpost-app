import { createAppContainer } from "react-navigation";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import showScreen from "./src/screens/ShowScreen";
import createScreen from "./src/screens/createScreen";
import editScreen from "./src/screens/editScreen";

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: showScreen,
  Create: createScreen,
  Edit: editScreen 
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

// export default createAppContainer(navigator); 

// CUSTOM COMPONENT

const App = createAppContainer(navigator); 

export default () => {
  return <Provider>
        <App />
    </Provider>
}


// DIFFERENCE BETWEEN "PROPS" AND "CONTEXT"

// PROPS ARE USE TO CONVEY THE INFORMATION TO THE IMEDIATE CHILD

// AND CONTEXT IS GOING TO CONVEY THE INFORMATION INTO THE DEEPLY NESTED CHILD