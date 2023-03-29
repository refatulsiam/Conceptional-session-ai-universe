import React from 'react';
import Button from './component/Button/Button';
import Card from './component/Card/Card';
import Header from './component/Header/Header';

const App = () => {
  return (
    <div>
      <>
      <Header></Header>
      <Button>Sort By Date</Button>
      <Card />
      </>
    </div>
  );
};

export default App;