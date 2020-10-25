const INITIAL_STATE = {
  iduser: null,
  username: '',
  email: '',
  phone: '',
  role: '',
  totalOrder: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      // apa yang akan disimpan di global store
      return {
        ...state,
        iduser: action.payload.iduser,
        username: action.payload.username,
        email: action.payload.email,
        phone: action.payload.phone,
        role: action.payload.role,
      };
    case 'LOGOUT':
      // reset state ke semula
      return INITIAL_STATE;
    case 'CHECKOUT':
      // reset state ke semula
      return { ...state };
    default:
      // data terakhir sebelum logout
      return state;
  }
};
