const ChangeView = (state = false, action) => {
  function toggle(state) {
    var newState = Object.assign({}, state);
    newState.changed = !newState.changed;
    return newState;
  }
  switch (action.type) {
    case "CHANGE_VIEW":
      return toggle(state);
    default:
      return state;
  }
};

export default ChangeView;
