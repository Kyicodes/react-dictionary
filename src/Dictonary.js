import React, { useState } from "react";
import axios from "axios";

import Result from "./Result";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [loaded, setLoaded] = useState(false);
  let [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data);
  }

  function search() {
    let Key = "55ea3bd4ftf0bf63c7f231oa6c374c08";
    let Url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${Key}`;
    axios.get(Url).then(handleResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function keywordsChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <label>What word do you want to look up?</label>
          <input
            type="search"
            defaultValue={props.defaultKeyword}
            placeholder="Type a word"
            onChange={keywordsChange}
          />

          <Result definition={definition} />
        </form>
      </div>
    );
  } else {
    load();
    return "Loading now!";
  }
}
