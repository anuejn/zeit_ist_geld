import React, { useState } from "react";
import ReactDOM from 'react-dom';
import '../tufte-css/tufte.css';
import Essay from './essay.mdx';
import { useTime } from "./Components";
import { MDXProvider } from '@mdx-js/react';

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render( <App />, document.getElementById('root'));
});


function App() {
  const time = useTime();
  const [wage, setWage] = useState(9.82);

  return <MDXProvider>
    <Essay time={time} wage={wage} setWage={setWage}/>
  </MDXProvider>
}
