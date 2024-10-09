import React from 'react';

function ProgressBar(){

    return(
        <>
      <progress value={0} />
      <progress value={0.5} />
      <progress value={0.7} />
      <progress value={75} max={100} />
      <progress value={1} />
      
    </>
    )
}

export default ProgressBar;