export const setFormNewContact = (value, input) => {
  return {type: 'SET_FORM', inputValue: value, inputType: input};
};

export const getAllData = (payload) => {
  return {
    type: 'GET_ALLDATA_CONTACT',
    payload,
  };
};

export const addNewContact = () => {
  return {type: 'ADD_NEW_CONTACT'};
};

export const deleteContactData = () => {
  return {type: 'DELETE_DATA_CONTACT'};
};

export const updateContactData = () => {
    return {type: 'UPDATE_DATA_CONTACT'};
  };


