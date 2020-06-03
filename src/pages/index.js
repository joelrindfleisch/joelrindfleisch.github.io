import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bash from "../components/bash"
import Keys from "../components/keys"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'keyName': ''
    }
  }

  componentDidMount() {
    document.onkeypress = (e) => {
      this.onKeyChange(e.key.toUpperCase());
    };
  }

  onKeyChange = (key) => {
    this.setState({
      keyName: key
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home"/>
        <Bash keyName={this.state.keyName}/>
        <Keys onKeyChange={this.onKeyChange}/>
      </Layout>
    )
  }

}

export default IndexPage
