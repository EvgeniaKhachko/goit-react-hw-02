import React from 'react';

function Description({ text }) {
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
}
export default Description;
