import React, { Component } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    error: state.error_fetch,
  }
}

class ErrorFetch extends Component {
  render() {
    return (
      <div>
        {this.props.error && <p className='error-fetch'>Fetch Error</p>}
      </div>
    )
  }
}

export default connect(mapStateToProps)(ErrorFetch)
