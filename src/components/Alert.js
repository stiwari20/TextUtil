import React from 'react'

function Alert(props) {

  const capitalize = (text)=>{
    const lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

  return (

    <div className='container' style={{height:"50px"}}>
        {props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
     </div>}
    </div>
  )
}

export default Alert;