import * as React from 'react';
import BodyGeometry from './ore-body-geometry'
import RampDrilling from './ore-ramp-drilling'
import RampVolume from './ore-ramp-volume'
import ShovelDimensions from './ore-shovel-dimensions'

function OreAccess() {
  return (
    <div style={{ display: 'flex', padding: '1rem', overflow: 'auto' }}>
      <div style={{ display: 'flex' }}>
        <ShovelDimensions />
        <BodyGeometry />
        <RampVolume />
        <RampDrilling />
      </div>
    </div>
  );
}

export default OreAccess;
