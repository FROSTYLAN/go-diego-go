import * as React from 'react';
import OveralSlopeAngle from './pot1';
import OverallSlopeAngleInterramp from './pot2';
import OverallSlopeAngleWorking from './pot3';
import OverallSlopeAngleOne from './pot4';
import FinalOverallPitSlope from './pot5';

function PitSlopeGeometry() {
  return (
    <div style={{ display: 'flex', padding: '1rem', overflow: 'auto' }}>
      <div style={{display: 'flex'}}>
      <OveralSlopeAngle />
      <OverallSlopeAngleInterramp />
      <OverallSlopeAngleWorking />
      <OverallSlopeAngleOne />
      <FinalOverallPitSlope />
      </div>
    </div>
  );
}

export default PitSlopeGeometry;
