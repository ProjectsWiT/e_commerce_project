const initialState = {
  loading: false,
  error: null,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "APP/SET_LOADING":
      return { ...state, loading: action.payload };
    case "APP/SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
