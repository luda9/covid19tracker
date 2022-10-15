import axios from "axios";
import Statecodes from "./Statecodes";

const url = "https://api.covidtracking.com/v1/us/current.json";

export const fetchData = async (state) => {
  console.log(state.state)
  if(state) {
    // changeableUrl = "";
  }
  try {
    const { data: [{positive, negative, death, dateChecked}] } = await axios.get(url);

    return { positive, negative, death, dateChecked}
  } catch (error) {

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
