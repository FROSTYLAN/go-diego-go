import { Image, Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import * as React from 'react';
import Image3 from '../assets/Imagen3.jpg';

function MinimumRequiredOperatingRoom() {
  const [ins, setIns] = React.useState([45.50, 28, 35.25, 43.50, 40.00, 54.50, 9, 4, 16, 45, 5]);
  const [outs, setOuts] = React.useState([8.00, 21.00, 102.00, 63.45, 60.00, 42.00, 64.30]);

  const handleChange = (value, index, type) => {
    const inTemp = [...ins]
    const outTemp = [...outs]

    if (type === 'in') {
      inTemp[index] = value
    } else if (type === 'out') {
      outTemp[index] = value
    }

    outTemp[0] = Number((2 * inTemp[7]) / Math.tan(inTemp[9] * (Math.PI / 180))).toFixed(0);
    outTemp[1] = inTemp[8] + inTemp[10]
    outTemp[2] = Math.round(inTemp[1] + inTemp[0] + inTemp[2])
    outTemp[3] = inTemp[2] * 0.9 * 2
    outTemp[4] = outTemp[4]
    outTemp[5] = outTemp[2] - outTemp[4]
    outTemp[6] = Math.atan(inTemp[4] / (inTemp[5] - inTemp[2])) * (180 / Math.PI)

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
              {[
                'Radio de descarga (B)',
                'Altura máxima de descarga (A)',
                'Dimensión del radio del piso nivelado (G)',
                'Altura máxima de la pala (D)',
                'Altura de banco (H)',
                'Radio máximo de corte de pala (E)',
                'Capacidad de cucharón',
                'Radio de rodadura del neumático',
                'Ancho de Camión',
                'Ángulo de reposo',
                'Tolerancia mínima'
              ].map((label, index) => (
                <Tr key={index}>
                  <Td>{label}</Td>
                  <Td>
                    <Input
                      placeholder='small size'
                      size='sm'
                      value={ins[index]}
                      onChange={(e) => handleChange(parseFloat(e.target.value) || 0, index, 'in')}
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
              {[
                'Ancho de berma',
                'Distancia línea central a la cresta (TC)',
                'Working Bench',
                'Ancho de corte (Wc)',
                'Ancho de corte ideal',
                'Banco de seguridad (Sb)',
                'Ángulo de fase'
              ].map((label, index) => (
                <Tr key={index}>
                  <Td>{label}</Td>
                  <Td>
                    <Input
                      placeholder='small size'
                      size='sm'
                      type={index === 4 ? 'number' : null}
                      disabled={index === 4 ? false : true}
                      value={outs[index]}
                      onChange={(e) => handleChange(parseFloat(e.target.value) || 0, index, 'out')}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Image src={Image3} alt="image3" />
      </div>
    </>
  );
}

export default MinimumRequiredOperatingRoom;
