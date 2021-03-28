import './App.css';
import { FunctionComponent } from 'react';
import { Sites } from './pages/Sites';
import { Layout } from './components/shared/Layout';

const App: FunctionComponent = () => {
  return (
    <Layout>
      <Sites />
    </Layout>
  );
};

export default App;
