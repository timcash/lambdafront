import {ADD_NOTE, SAVE_NOTE, DELETE_NOTES} from '../constants/ActionTypes';
import calculator from '../businessLogic/fuelSavingsCalculator';
import dateHelper from '../businessLogic/dateHelper';
import objectAssign from 'object-assign';

const initialState = {
    author: "boobaz",
    clipid: "",
    text: "",
    searchValue: "tim",
    notes:[
      {author:"jennie", clipid:"1234", text:"some note text", noteid:"4214132"},
      {author:"george", clipid:"1234", text:"great clip", noteid:"23r44234"}
    ]
};

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead,
//create a copy of the state passed and set new values on the copy.
//Note that I'm using Object.assign to create a copy of current state
//and update values on the copy.
export default function fuelSavingsAppState(state = initialState, action) {
	switch (action.type) {
		case SAVE_NOTE:
    {
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      console.log("REDUCER_SAVE_NOTE", action);
			return objectAssign({}, state, { author: "foobar", text: "", clipid: ""});
    }

		case ADD_NOTE:
    {
      let notes = [action, ...state.notes];
      return objectAssign({}, state, { notes });
    }

		case DELETE_NOTES:
    {
      console.log("DELETE_NOTES");
      return objectAssign({}, state, { notes:[] });
    }

		default:
			return state;
	}
}
