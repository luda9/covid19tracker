import React, {useState, useEffect} from 'react'
import{ NativeSelect, FormControl } from '@mui/material';
import styles from "./StatePicker.module.css";

import { fetchStates } from "../../api";

function StatePicker({ handleStateChange }) {
  const [fetchedStates, setFetchedStates] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedStates(await fetchStates());
    }

    fetchAPI();
  }, [setFetchedStates]);


  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={(e) => handleStateChange(e.target.value)}>
        <option value="USA">United States</option>
        {fetchedStates.map((state, i) => <option key={i} value={state.name}>{state.name}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default StatePicker
