import React from "react";
import { Cards, Chart, StatePicker, Navbar, Banner, Covidinfo, Bar, TrackerSection, Footer} from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleStateChange = async (state) => {
    const fetchedData = await fetchData(state);

    this.setState({ data: fetchedData, state: state });
  }

	render(){
    const { data, state } = this.state;
		return (
			<div className={styles.container}>
        <Routes>
          <Route path="/covid19tracker" element={<><Navbar /><Banner /><Bar /><Covidinfo /><TrackerSection /><Footer /><Helmet><title>Covid Tracker - Home</title></Helmet></>}/>
          <Route path="/covid19tracker/statistics" element={<><Navbar /><Cards data={data}/><StatePicker handleStateChange={this.handleStateChange} /><Chart data={data} state={state} /><Footer /><Helmet><title>Covid Tracker - Statistics</title></Helmet></>}/>
        </Routes>
			</div>
			)
		}
}

export default App;
