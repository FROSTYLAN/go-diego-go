import * as React from 'react';
import { ChakraProvider, Box, Tabs, TabList, Tab, TabPanels } from '@chakra-ui/react';
import { HashRouter as Router, Route, Routes, Link, useLocation, Outlet } from 'react-router-dom';
import GeomtricalConsideration from './app/geometrical-consideration';
import OreAccess from './app/ore-access';
import MinimumRequiredOperatingRoom from './app/minimum-required-operating-room';
import PitSlopeGeometry from './app/pot-slope-geometry';
import PlanarFail from './app/planar-fail';
import CircularFail from './app/circular-fail';

function App() {
  const location = useLocation();

  return (
    <ChakraProvider>
      <div style={{ width: '100vw', height: '100vh', padding: '2rem' }}>
        <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
          <Tabs index={getIndexFromLocation(location.pathname)} width="100%" height="100%" border="1px solid" borderColor="gray.200">
            <TabList>
              <Tab as={Link} to="/geometrical-consideration">Geometrical Consideration</Tab>
              <Tab as={Link} to="/ore-access">Ore Access</Tab>
              <Tab as={Link} to="/minimum-required-operating-room">Minimum Required Operating Room</Tab>
              <Tab as={Link} to="/pit-slope-geometry">Pit Slope Geometry</Tab>
              <Tab as={Link} to="/falla-planar">Falla planar</Tab>
              <Tab as={Link} to="/falla-circular">Falla circular</Tab>
            </TabList>

            <TabPanels overflow='auto' maxHeight='calc(100vh - 110px)'>
              <Outlet />
            </TabPanels>
          </Tabs>
        </Box>
      </div>
    </ChakraProvider>
  );
}

function getIndexFromLocation(pathname) {
  switch (pathname) {
    case '/geometrical-consideration':
      return 0;
    case '/ore-access':
      return 1;
    case '/minimum-required-operating-room':
      return 2;
    case '/pit-slope-geometry':
      return 3;
    case '/falla-planar':
      return 4;
    case '/falla-circular':
      return 5;
    default:
      return 0;
  }
}

function MainApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="geometrical-consideration" element={<GeomtricalConsideration />} />
          <Route path="ore-access" element={<OreAccess />} />
          <Route path="minimum-required-operating-room" element={<MinimumRequiredOperatingRoom />} />
          <Route path="pit-slope-geometry" element={<PitSlopeGeometry />} />
          <Route path="falla-planar" element={<PlanarFail />} />
          <Route path="falla-circular" element={<CircularFail />} />
          <Route path="*" element={<GeomtricalConsideration />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default MainApp;
