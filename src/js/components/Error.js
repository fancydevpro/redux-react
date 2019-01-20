import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { error: state.error }
}

const ConnectedError = ({ error }) => (
  <div className='error'>
    {error && <p className='error-description'>Cannot add this article</p>}
  </div>
)

const Error = connect(mapStateToProps)(ConnectedError)

export default Error
