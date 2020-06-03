import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header
        siteTitle='Joel Rindfleisch Dot Com'
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            textAlign: 'center',
            marginTop: '40px'
          }}
        >
          © {'Joel Rindfleisch ' + new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
