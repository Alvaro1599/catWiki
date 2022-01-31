import axios from "axios"

export const homeData = () => async (dispatch) => {
  const data = await axios.get("http://localhost:4000/api/getBredds")
  console.log("dataagain");
  dispatch({
    type: "GET_HOME_DATA",
    payload: data.data
  })
}

export const filterData = (string = "amer") => async (dispatch) => {
  dispatch({
    type: "FILTER_DATA",
    payload: string
  })
}

export const detail = (id) => async (dispatch) => {
  console.log(id);
  const data = await axios.get("http://localhost:4000/api/getDetail/" + id)
  dispatch({
    type: "GET_DETAIL",
    payload: data.data
  })
}