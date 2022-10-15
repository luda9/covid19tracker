import axios from "axios";
import NameToCode from "./NameToCode.jsx";



const url = "https://api.covidtracking.com/v1/us/current.json";

export const fetchData = async (state) => {
  const code = NameToCode(state);
  let changeableUrl = url;

  // console.log(changeableUrl);

  // if(code) {
  //   changeableUrl = `https://api.covidtracking.com/v1/states/${code}/current.json`;
  // }

  // console.log(changeableUrl);

  // try {
  //   const { data: [{positive, negative, death, dateChecked}] } = await axios.get(changeableUrl);

  //   return { positive, negative, death, dateChecked}
  // } catch (error) {
  //   console.log(error);
  // }

  // ------------
  if(code) {
    changeableUrl = `https://api.covidtracking.com/v1/states/${code}/current.json`;
    try {
      const { data: {positive, negative, death, dateChecked} } = await axios.get(changeableUrl);

      return { positive, negative, death, dateChecked}
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const { data: [{positive, negative, death, dateChecked}] } = await axios.get(url);

      return { positive, negative, death, dateChecked}
    } catch (error) {
      console.log(error);
    }
  }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
      const modifiedData = data.map((dailyData) => ({
        positive: dailyData.positive,
        death: dailyData.death,
        date: dailyData.date
      }));

      const total = modifiedData.reverse();

      return total.slice(0, 100);;
  } catch (error) {
    console.log(error)
  }
}

export const fetchStates = async () => {
  try {
    const info = await axios.get('https://api.covidtracking.com/v1/states/info.json');
    const response = info.data

    let stateName = [];

    for (let i = 0; i < response.length; i++) {
      let result = response[i];
      stateName.push(result);
    }
    return (stateName)
  } catch (error) {
    console.log(error)
  }
}
