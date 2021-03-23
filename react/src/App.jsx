import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button/Button';

ReactDOM.render(<Button label={'Click on me'} onFridaClick={() => console.log('Frida är en bajskorv!')}></Button>, document.getElementById('app'));npm