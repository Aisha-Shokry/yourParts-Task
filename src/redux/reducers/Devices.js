export function Devices(state={}, action) {
    switch (action.type) {
      case 'MOBILE_LIST': {
        return { ...state, list: action.payload };
      }
      case 'MOBILE_DETAILS': {
        return { ...state, details: action.payload };
      }
      case 'CLEAR_DETAILS': {
        return { ...state, details: action.payload };
      }
      default:
        return state;
    }
  }
  