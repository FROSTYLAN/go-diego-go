import { Box, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, Image, Input } from '@chakra-ui/react';
import * as React from 'react';

import Img1 from '../assets/Imagen1.png';
import Img2 from '../assets/Imagen2.png';

function GeomtricalConsideration() {
  const [tableValues, setTableValues] = React.useState([
    [15, 25, 30, 40, 45],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [40, 40, 40, 40, 40]
  ]);

  React.useEffect(() => {
    setTableValues(calculate(tableValues));
  }, []);

  const handleInputChange = (rowIndex, colIndex, value) => {
    const newValues = [...tableValues];
    newValues[rowIndex][colIndex] = parseFloat(value);
    setTableValues(calculate(tableValues));
  };

  const calculate = (values) => {
    const arrTemp = [...values];
    for (let i = 0; i < arrTemp[0].length; i++) {
      const bench = arrTemp[0][i];
      const angRep = arrTemp[5][i];

      arrTemp[1][i] = Number((-0.0011 * (bench ** 2)) + (0.1167 * bench) + 2).toFixed(1);

      if (bench <= 9) {
        arrTemp[4][i] = Number(0.2 * bench + 2).toFixed(1);
      } else if (bench > 9) {
        arrTemp[4][i] = Number(0.2 * bench + 4.5).toFixed(1);
      }

      arrTemp[3][i] = Number(arrTemp[4][i] - arrTemp[1][i]).toFixed(1);

      arrTemp[2][i] = Number(Math.tan(arrTemp[3][i] * (Math.PI / 180)) * (angRep / 2)).toFixed(2);
    }
    return arrTemp;
  };

  return (
    <div style={{ padding: '1rem' }}>
      <TableContainer>
        <Table size='sm'>
          <Thead>
            <Tr>
              <Th isNumeric>Bench Height (m)</Th>
              <Th>Impact zone (m)</Th>
              <Th>Berm height (m)</Th>
              <Th>Berm width (m)</Th>
              <Th>Minimum bench width (m)</Th>
              <Th isNumeric>Ángulo de reposo (°)</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableValues[0].map((_, colIndex) => (
              <Tr key={colIndex}>
                <Td isNumeric>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={tableValues[0][colIndex]}
                    onChange={(e) => handleInputChange(0, colIndex, e.target.value)}
                  />
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={tableValues[1][colIndex]}
                    disabled
                  />
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={tableValues[2][colIndex]}
                    disabled
                  />
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={tableValues[3][colIndex]}
                    disabled
                  />
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={tableValues[4][colIndex]}
                    disabled
                  />
                </Td>
                <Td isNumeric>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={tableValues[5][colIndex]}
                    onChange={(e) => handleInputChange(5, colIndex, e.target.value)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Box display='flex' width='100%' mt="24px" justifyContent='space-around' alignItems='center'>
        <Image src={Img1} alt='Imagen 1' width='300px' />
        <Image src={Img2} alt='Imagen 2' width='300px' />
      </Box>
    </div>
  );
}

export default GeomtricalConsideration;
