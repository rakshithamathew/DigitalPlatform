import React, { useState } from "react";

const PropFile = ({Propdata, fullName}) => {
  const [check, setCheck] = useState();
  return (
    <div>
      PropFile
      <input
        type="checkbox"
        onClick={(e) => {
          setCheck(e.target.checked);
          console.log(e.target.checked);
        }}
      />
      <p>{check ? <p>{Propdata.age} {Propdata.city} {fullName}</p> : <p></p>}</p>
    </div>
  );
};

export default PropFile;
