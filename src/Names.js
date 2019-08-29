import React from 'react';
function Names(props){
    return(
<div className="App"> 

<h1 style={{color:'blue'}}>
    {props.names}   
</h1>


     </div>
    );
}
export default Names;