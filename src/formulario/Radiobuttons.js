import React from 'react';

const RadioButtons = props => {
  const {description, id1, id2, nameradio, option1, option2} = props // Another way of de-structuring
  return (
    <React.Fragment>
      <div>{description}</div>
      <div>
        <input type="radio" id={id1} name={nameradio} value="0" defaultChecked={true} />{option1}<br></br>
        <input type="radio" id={id2} name={nameradio} value="1" />{option2}
      </div>
    </React.Fragment>
  );
}

export default RadioButtons;