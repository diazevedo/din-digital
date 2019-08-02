import React from 'react'

const Form = props => (
  <form {...props} className="form-default">
      { props.children }
  </form>
)

export default Form