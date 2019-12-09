import React from 'react';
import { Provider } from 'react-redux';

import { Layout } from './components/layout/Layout';
import { appStore } from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={appStore}>
      <Layout></Layout>
    </Provider>
  );
}

export default App;
