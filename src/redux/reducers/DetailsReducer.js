const Details = (state = {}, action) => {
  switch (action.type) {
    case "MOBILE_DETAILS":
      return { ...state, details: action.payload };
    case "CLEAR_DETAILS": {
      return { ...state, details: action.payload };
    }
    default:
      return state;
  }
};
export default Details;
