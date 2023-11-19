import React, { useState } from "react";

export default function Dictionary() {
  function Search(event) {
    event.preventDefault();
    alert("Searching now");
  }
  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="search" />
      </form>
    </div>
  );
}
