const initialState = {
  data: null,
  errorMessage: '',
  isLoading: false,
  isError: false,
};

const LoginReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'USER_LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        errorMessage: '',
        isError: false,
      };
    case 'USER_LOGIN_FAILED':
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

export default LoginReducer;
