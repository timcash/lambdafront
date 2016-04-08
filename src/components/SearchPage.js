import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import '../styles/about-page.css';
import fetch from 'isomorphic-fetch';

// Since this component is simple and static, there's no parent container for it.
let searchValue = "tim";

const SearchPage = ({actions, appState}) => {
    let notedivs = appState.notes.map((n)=>{
        return (<div className="noteItem" key={n.noteid}>
          <div><span>NoteID:</span><span className="noteData">{n.noteid}</span></div>
          <div><span>Author:</span><span className="noteData">{n.author}</span></div>
          <div><span>Text:</span><span className="noteData">{n.text}</span></div>
          <div><span>ClipID:</span><span className="noteData">{n.clipid}</span></div>
        </div>);
    });

    return (
      <div>
        <h2 className="alt-header">Search</h2>
        <input className="searchbox" onChange={(e)=>{
          console.log(e.target.value);
          appState.searchValue = e.target.value;
          actions.deleteSearchNotes();
        }}/>
        {notedivs}
      </div>
    );
};

SearchPage.propTypes = {
  actions: PropTypes.object.isRequired,
  appState: PropTypes.object.isRequired
};

export default SearchPage;
