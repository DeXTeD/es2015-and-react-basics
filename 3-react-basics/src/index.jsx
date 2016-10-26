import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const TEST_DATA = [
    {episode_id: 4, title: 'A New Hope',              director: 'George Lucas'},
    {episode_id: 5, title: 'The Empire Strikes Back', director: 'Irvin Kershner'},
    {episode_id: 6, title: 'Return of the Jedi',      director: 'Richard Marquand'},
];

ReactDOM.render(<App films={TEST_DATA} />, document.getElementById('app'));
