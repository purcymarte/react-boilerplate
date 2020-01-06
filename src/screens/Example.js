import React, {useEffect} from 'react';


function Example(props) {
  const onClick = () => {
  	props.onClick() // let container handle the click
  }

  return (
    <div onClick={onClick}>Example</div>
  );

}

export default Example;
