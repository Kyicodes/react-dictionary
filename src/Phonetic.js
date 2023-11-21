import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="phonetics">
        <h3>{props.phonetic}</h3>
      </div>
    );
  } else {
    return null;
  }
}
