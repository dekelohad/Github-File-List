import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FileList from './FileList';

  const testFiles = [
    {
      id: 1,
      name: 'src',
      type: 'folder',
      updated_at: "2020-07-11 21:24:00",
      latestCommit: {
      message: 'Initial commit'
      }
    },
    {
      id: 2,
      name: 'tests',
      type: 'folder',
      updated_at: "2020-07-11 21:24:00",
      latestCommit: {
      message: 'Initial commit'
      }
    },
    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: "2020-07-18 21:24:00",
        latestCommit: {
        message: 'Added a readme'
        }
    },
  ]

ReactDOM.render(<FileList files ={testFiles}/>,document.getElementById('root'));

 
