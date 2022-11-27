import React, { FC } from 'react';
import Canvas from './Canvas';

export const MyCanvas: FC = () => {
  return (
    <div className="page-container">
      <h1>MyCanvas.tsx</h1>
      <Canvas id="myCanvas" width="500" height="300"></Canvas>
    </div>
  );
};


