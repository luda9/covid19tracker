import React from "react";

import { Cards, Chart, StatePicker} from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

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
    console.log(state);
    const fetchedData = await fetchData(state);
  }

	render(){
    const { data } = this.state;
		return (
			<div className={styles.container}>
				<Cards data={data}/>
				<StatePicker handleStateChange={this.handleStateChange} />
				<Chart />
			</div>
			)
		}
}

export default App;
