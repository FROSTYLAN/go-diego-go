import { Image, Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import * as React from 'react';
import Image3 from '../assets/Imagen3.png';

function MinimumRequiredOperatingRoom() {
  const [ins, setIns] = React.useState([40, 5, 45, 85, 16, 8, 9, 12.25, 45.50, 28, 35.25, 43.50, 54.50]);
  const [outs, setOuts] = React.useState([8, 16, 21, 45.5, 35.25, 102, 63.5, 60, 42, 43.5, 54.5, 35.25, 64.30, 25.5, 25.5, 'Cuadrada']);

  const handleChange = (value, index) => {
    const inTemp = [...ins]
    const outTemp = [...outs]
    inTemp[index] = value

    outTemp[0] = inTemp[5]
    outTemp[1] = (2 * outTemp[0]) / Math.tan(inTemp[2] * Math.PI / 180);
    outTemp[2] = inTemp[1] + inTemp[4]
    outTemp[3] = inTemp[8]
    outTemp[4] = inTemp[10]
    outTemp[5] = Math.round(outTemp[2] + inTemp[8] + inTemp[10])
    outTemp[6] = Math.round(0.9 * 2 * inTemp[10] * 10) / 10
    outTemp[7] = 60
    outTemp[8] = outTemp[5] - outTemp[7]
    outTemp[9] = inTemp[11]
    outTemp[10] = inTemp[12]
    outTemp[11] = inTemp[10]
    outTemp[12] = Math.atan(inTemp[0] / (outTemp[10] - outTemp[11])) * (180 / Math.PI)
    outTemp[13] = Math.round((25 * inTemp[7] / 12) * 10) / 10
    outTemp[14] = outTemp[13]

    setIns(inTemp);
    setOuts(outTemp)
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <TableContainer size='sm'>
          <Table>
            <Thead>
              <Tr>
                <Th colSpan="2">Datos</Th>
              </Tr>
            </Thead>
            <Tbody>
              {['Bench height', 'Minimun clearence between outer truck tire and the safety berm', 'Angle of repose', 'Capacity Truck', 'Truck width', 'Tire rolling radius', 'Loading Shovel', 'hole diameter (De)', 'Dumping radius at maximum height - A', 'Dumping height maximum', 'Radius of level floor', 'Cutting height maximum', 'Cutting radius maximum'].map((label, index) => (
                <Tr key={index}>
                  <Td>{label}</Td>
                  <Td>
                    <Input
                      placeholder='small size'
                      size='sm'
                      value={ins[index]}
                      onChange={(e) => handleChange(parseFloat(e.target.value) || 0, index)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <TableContainer size='sm'>
          <Table>
            <Thead>
              <Tr>
                <Th colSpan="2">Cálculos</Th>
              </Tr>
            </Thead>
            <Tbody>
              {['Height Safety Berm', 'Width Safety Berm', 'Distancia linea central a la cresta (TC)', 'Maximun dumping radius (B)', 'Radius of level flor (A)', 'Dimensiones esperadas del Working Bench (Wb)', 'Cut width (Wc)', 'Cut width less', 'Safety Bench (SB)', 'Cut Height (D)', 'Shovel Cutting Radius (E)', 'Radius of level flor (G)', 'Bench Face Angle', 'Burden', 'Espaciamiento', 'Malla de perforación'].map((label, index) => (
                <Tr key={index}>
                  <Td>{label}</Td>
                  <Td>
                    <Input
                      placeholder='small size'
                      size='sm'
                      disabled
                      value={outs[index]}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <Image src={Image3} alt="image3" />
    </>
  );
}

export default MinimumRequiredOperatingRoom;
