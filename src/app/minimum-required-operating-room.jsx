import { Image, Input, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import * as React from 'react';
import Image3 from '../assets/Imagen3.png';

function MinimumRequiredOperatingRoom() {
  const [ins, setIns] = React.useState([40, 5, 45, 85, 16, 8, 9, 12.25, 45.50, 28, 35.25, 43.50, 54.50])
  const [outs, setOuts] = React.useState([8, 16, 21, 45.5, 35.25, 102, 63.5, 60, 42, 43.5, 54.5, 35.25, 64.30, 25.5, 25.5, 'Cuadrada'])

  // React.useEffect(() => {
  //   setIns()
  //   setOuts()
  // }, [])

  const handleChange = (value, type, index) => {
    const arrTemp = type === 1 ? [...ins] : [...outs]

    arrTemp[index] = value

    if (type === 1) {
      setIns(arrTemp)
    } else {
      setOuts(arrTemp)
    }
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <TableContainer size='sm'>
          <Table>
            <Thead>
              <Tr>
                <Th cols='2'>
                  Datos
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  Bench height
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={ins[0]}
                    onChange={(e) => handleChange(e.target.value, 1, 0)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  Minimun clearence between outer truck tire and the safety berm
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={ins[1]}
                    onChange={(e) => handleChange(e.target.value, 1, 1)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  Angle of repose
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={ins[2]}
                    onChange={(e) => handleChange(e.target.value, 1, 2)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  Capacity Truck
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={ins[3]}
                    onChange={(e) => handleChange(e.target.value, 1, 3)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  Truck width
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={ins[4]}
                    onChange={(e) => handleChange(e.target.value, 1, 4)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  Tire rolling radius
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={ins[5]}
                    onChange={(e) => handleChange(e.target.value, 1, 5)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  Loading Shovel
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={ins[6]}
                    onChange={(e) => handleChange(e.target.value, 1, 6)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  hole diameter (De)
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={ins[7]}
                    onChange={(e) => handleChange(e.target.value, 1, 7)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <p>B</p>
                  <span>Dumping radius at maximum height - A</span>
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={ins[8]}
                    onChange={(e) => handleChange(e.target.value, 1, 8)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <p>A</p>
                  <span>Dumping height maximum</span>
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={ins[9]}
                    onChange={(e) => handleChange(e.target.value, 1, 9)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <p>G</p>
                  <span>Radius of level floor</span>
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={ins[10]}
                    onChange={(e) => handleChange(e.target.value, 1, 10)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <p>D</p>
                  <span>Cutting height maximum</span>
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={ins[11]}
                    onChange={(e) => handleChange(e.target.value, 1, 11)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <p>E</p>
                  <span>Cutting radius maximum</span>
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    value={ins[12]}
                    onChange={(e) => handleChange(e.target.value, 1, 12)}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <TableContainer size='sm'>
          <Table>
            <Thead>
              <Tr>
                <Th cols='2'>
                  Cálculos
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  Height Safety Berm
                </Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    disabled
                    value={outs[0]}
                    onChange={(e) => handleChange(e.target.value, 0, 0)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Width Safety Berm</Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    disabled
                    value={outs[1]}
                    onChange={(e) => handleChange(e.target.value, 0, 1)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Distancia linea central a la cresta (TC)</Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    disabled
                    value={outs[2]}
                    onChange={(e) => handleChange(e.target.value, 0, 2)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Maximun dumping radius (B)</Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    disabled
                    value={outs[3]}
                    onChange={(e) => handleChange(e.target.value, 0, 3)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Radius of level flor (A)</Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    disabled
                    value={outs[4]}
                    onChange={(e) => handleChange(e.target.value, 0, 4)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Dimensiones esperadas del Working Bench (Wb)</Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    disabled
                    value={outs[5]}
                    onChange={(e) => handleChange(e.target.value, 0, 5)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Cut width (Wc)</Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    disabled
                    value={outs[6]}
                    onChange={(e) => handleChange(e.target.value, 0, 6)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Cut width less</Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    disabled
                    value={outs[7]}
                    onChange={(e) => handleChange(e.target.value, 0, 7)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Safety Bench (SB)</Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    disabled
                    value={outs[8]}
                    onChange={(e) => handleChange(e.target.value, 0, 8)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Cut Heihgt (D)</Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    disabled
                    value={outs[9]}
                    onChange={(e) => handleChange(e.target.value, 0, 9)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Shovel Cuting Radius (E)</Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    disabled
                    value={outs[10]}
                    onChange={(e) => handleChange(e.target.value, 0, 10)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Radius of level flor (G)</Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    disabled
                    value={outs[11]}
                    onChange={(e) => handleChange(e.target.value, 0, 11)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Bench Face Angle</Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    disabled
                    value={outs[12]}
                    onChange={(e) => handleChange(e.target.value, 0, 12)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Burden</Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    disabled
                    value={outs[13]}
                    onChange={(e) => handleChange(e.target.value, 0, 13)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Espaciamiento</Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    disabled
                    value={outs[14]}
                    onChange={(e) => handleChange(e.target.value, 0, 14)}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Malla de perforación</Td>
                <Td>
                  <Input
                    placeholder='small size'
                    size='sm'
                    disabled
                    value={outs[15]}
                    onChange={(e) => handleChange(e.target.value, 0, 15)}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <Image src={Image3} alt="image3" />
    </>
  );
}

export default MinimumRequiredOperatingRoom;
