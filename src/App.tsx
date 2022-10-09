import React from 'react';
import MyButton from './components/Button'

const App = () => {
  console.log('123');
  return (
          <div>
              <MyButton width={"150px"} textColor={'white'} bgColor={'green'}>Click!</MyButton>
          </div>
  );
};

export default App;
