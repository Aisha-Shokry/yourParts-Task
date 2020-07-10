import axios from "axios";
export const getDevices = () => {
  let mobilesData = axios
    .get(
      "https://pixabay.com/api/?key=11295366-e4d7e8eab0c39f30afd0e7330&q=yellow+flowers&image_type=photo&pretty=true&per_page=100"
    )
    .then((res) => {
      return res.data.hits;
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    type: "MOBILES_LIST",
    payload: mobilesData,
  };
};

export function getMobileDetails(id = 0) {
  let mobileDetails = axios
    .get(
      `https://pixabay.com/api/?key=11295366-e4d7e8eab0c39f30afd0e7330&q=yellow+flowers&image_type=photo&pretty=true&per_page=100&id=${id}`
    )
    .then((res) => {
      return res.data.hits;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    type: "MOBILE_DETAILS",
    payload: mobileDetails,
  };
}

export function clearDetails(id = 0) {
  return {
    type: "CLEAR_DETAILS",
    payload: {},
  };
}

export function changeView() {
  return {
    type: "CHANGE_VIEW",
    payload: {},
  };
}
