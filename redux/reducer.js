import {combineReducers} from 'redux';

let dataInit = {
  loading: false,
  form: {
    id: '',
    firstName: '',
    lastName: '',
    photo: '',
    age: 0,
  },
  formInput: {
    firstName: '',
    lastName: '',
    photo: '',
    age: 0,
  },
  list: [],
};

const FormNewContactReducer = (state = dataInit, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      formInput: {...state.formInput, [action.inputType]: action.inputValue},
    };
  }
  if (action.type === 'ADD_NEW_CONTACT') {
    return {
      ...state,
      formInput: {
        firstName: '',
        lastName: '',
        photo: '',
        age: 0,
      },
    };
  }
  return state;
};

const ContactListReducer = (state = dataInit, action) => {
  if (action.type === 'GET_ALLDATA_CONTACT') {
    return {...state, list: action.payload};
  }
  return state;
};

const ContactDetailReducer = (state = dataInit, action) => {
  if (action.type === 'UPDATE_DATA_CONTACT') {
    state.list.map((item) =>
      item.id === action.newValue.id ? (item = action.newValue) : item,
    );
    return state;
  }
  if (action.type === 'DELETE_DATA_CONTACT') {
    let a = state.list.filter((item) => item.id !== action.id);
    state.list = a;
    return state;
  }

  return state;
};

const reducer = combineReducers({
  FormNewContactReducer,
  ContactListReducer,
  ContactDetailReducer,
});

export default reducer;
