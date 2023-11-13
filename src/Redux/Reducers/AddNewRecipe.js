const initialState = {
  isLoading: false,
  data: null,
  errorMessage: '',
  isError: false,
};

const AddNewRecipe = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'AddNewRecipe_PENDING':
      return {
        ...state,
        isLoading: true,
      };

    case 'AddNewRecipe_SUCCESS':
      return {
        ...state,
        data: payload,
        isLoading: false,
        errorMessage: '',
        isError: false,
      };

    case 'AddNewRecipe_FAILED':
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

export default AddNewRecipe;
