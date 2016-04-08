import React, {PropTypes} from 'react';
import FuelSavingsResults from './FuelSavingsResults';
import FuelSavingsTextInput from './FuelSavingsTextInput';

// Destrucuring props for brevity below.
const FuelSavingsForm = ({saveNote, appState}) => {

  return (
    <div>
      <h2>ENTER A NOTE</h2>
      <table>
        <tbody>
        <tr>
          <td><label htmlFor="Author">Author</label></td>
          <td><FuelSavingsTextInput onChange={(e, val)=>{
            appState.author = val;
          }} name="author"/></td>
        </tr>
        <tr>
          <td><label htmlFor="Text">Text</label></td>
          <td><FuelSavingsTextInput onChange={(e, val)=>{
            appState.text = val;
          }} name="Text"/></td>
        </tr>
        <tr>
          <td><label htmlFor="ClipID">ClipId</label></td>
          <td><FuelSavingsTextInput onChange={(e, val)=>{
            appState.clipid = val;
          }}  name="ClipID"/></td>
        </tr>
        </tbody>
      </table>

      <hr/>

      <div onClick={() => {
        saveNote(appState.author, appState.text, appState.clipid);
      }}> SUBMIT </div>
    </div>
  );
};

FuelSavingsForm.propTypes = {
  saveNote: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

export default FuelSavingsForm;
