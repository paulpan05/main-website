import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-nunito';
import './styles/index.less';

const App: React.FC = () => {
  return (
      <h1>Welcome to ACM!</h1>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));