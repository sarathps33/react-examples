// BaseComponent.js
import React from 'react';

const BaseComponent = ({ data }) => {
  return (
    <div>
      <h2>Data:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BaseComponent;
