const initialState = {
  data: null,
  errorMessage: '',
  isLoading: false,
  isError: false,
};

const MyRecipe = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'MyRecipe_USER_PENDING':
      return {
        ...state,
        isLoading: true,
      };
    case 'MyRecipe_USER_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        errorMessage: '',
        isError: false,
      };
    case 'MyRecipe_USER_FAILED':
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

export default MyRecipe;
