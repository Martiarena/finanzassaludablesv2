import React from 'react'

function Options({optionatri}) {
  return (
    <React.Fragment>
        <label className='label-radio' htmlFor={optionatri.idradio}>
            <input type="radio" id={optionatri.idradio} name={optionatri.nameradio} value={optionatri.value} />
            <span>{optionatri.description}</span>
        </label>
    </React.Fragment>
  )
}

export default Options