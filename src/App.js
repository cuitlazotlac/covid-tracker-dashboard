import React from 'react';
import './App.css';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends React.Component{
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData, country: country })
    // console.log(fetchedData)
  }

  handleCountryChange = async (country) => {
    const fetchData = await fetchedData();

    if(country) {
      changeableUrl = `${url}/countries/${country}`
    }
  }

  render() {
    const { data, country } = this.state;
    
    return(
      <div className={styles.container}>
        <Cards data={this.state.data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App;
