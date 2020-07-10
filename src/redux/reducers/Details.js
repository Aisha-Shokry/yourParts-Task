const Details = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case "MOBILE_DETAILS":
      return { ...state, details: action.payload };

    default:
      return state;
  }
};
export default Details;
