const Devices = (state = {}, action) => {
  switch (action.type) {
    case "MOBILES_LIST": {
      return { ...state, list: action.payload };
    }

    default:
      return state;
  }
};
export default Devices;
