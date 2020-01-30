import React from "react";
const axios = require('axios').default;

class App extends Component {
  componentDidMount() {
    fetch('http://localhost:3000/getBudget/5e31b2150393b87862452bd0')
    .then(res => res.json())
    .then((data) => {
      this.setState({ budget: data })
    })
    .catch(console.log)
  }
}

export default () => (
  <>
    <h1>Welcome to React Parcel Micro App!</h1>
    <p>Hard to get more minimal than this React app.</p>
  </>
);