import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Immutable from 'immutable';
import Cursor from 'immutable/contrib/cursor';
import Hello from './Hello';

let someValue = Immutable.Map<string, string>();
someValue = someValue.set('text', 'Hello, Typescripters!');

Cursor.from(someValue, [], newData => {
    someValue = newData;
});

const mountNode =  document.querySelector('#app');
ReactDOM.render(<Hello value={someValue} />, mountNode);
