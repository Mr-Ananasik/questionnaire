import React, {useEffect} from 'react';
import {AuthContext} from "./context";
import axios from "axios";

const App = () => {
    useEffect(() => {
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=Ekaterinburg&appid=d0a89c0555a1454404f6c8d8a4f4f90f&units=metric')
            .then(res => {
                console.log(res.data);
            })
    },[])
  return (
          <div>
          </div>
  );
};

export default App;
