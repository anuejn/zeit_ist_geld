import * as React from 'react';
import ReactDOM from 'react-dom';
import '../tufte-css/tufte.css';
import { MDXProvider } from '@mdx-js/react';
import Essay from './essay.mdx';

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MDXProvider>
      <Essay />
    </MDXProvider>,
    document.getElementById('root')
  );
});
