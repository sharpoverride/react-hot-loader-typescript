console.log('how are you?');
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Hello from './Hello';

const mountNode =  document.querySelector('#app');
ReactDOM.render(<Hello />, mountNode);

setTimeout(() => {
    ReactDOM.unmountComponentAtNode(mountNode);
}, 5000);