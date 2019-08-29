import React from 'react';
function Button(props){
return(
    <a href={props.url}>
<button style={{backgroundColor:"red", height:"40px",width:"40px"}} > 

    {props.BTN}
</button>

</a>
)
}
export default Button;