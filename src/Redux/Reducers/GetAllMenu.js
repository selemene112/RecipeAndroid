const initialState = {
  data: null,
  errorMessage: '',
  isLoading: false,
  isError: false,
};

const GetAllMenu = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GetAllMenu_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'GetAllMenu_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        errorMessage: '',
        isError: false,
      };
    case 'GetAllMenu_FAILED':
      return {
        ...state,
        data: null,
        errorMessage: payload,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default GetAllMenu;
