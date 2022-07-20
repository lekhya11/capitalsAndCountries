import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const countryName = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeCapitalId,
    )

    return countryName.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry()

    return (
      <div className="app-container">
        <div className="capital-container">
          <h1 className="heading">Countries and Capitals</h1>
          <select
            className="select"
            onChange={this.onChangeCapital}
            value={activeCapitalId}
          >
            {countryAndCapitalsList.map(eachValue => (
              <option
                className="option"
                value={eachValue.id}
                key={eachValue.id}
              >
                {eachValue.capitalDisplayText}
              </option>
            ))}
          </select>
          <p className="question">is capital of which country?</p>
          <div>
            <p className="country-heading">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
