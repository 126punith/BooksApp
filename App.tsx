import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './app/features/store';
import RootStack from './app/routes/RootStack.tsx';

const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};

export default App;
