import * as React from 'react';
import CircularA from './circular-a';
import CircularB from './circular-b';
import CircularC from './circular-c';
import CircularD from './circular-d';
import CircularE from './circular-e';
import CircularF from './circular-f';
import { TableContainer, Table, Tr, Tbody, Td, Input, Text } from '@chakra-ui/react';

function CircularFail() {
  const [defaults, setDefaults] = React.useState([2.495, 160.26, 1600, 500])

  const [fors, setFors] = React.useState(
    [
      [-9.2585087388498, -1.3811826370243, -0.0189126604258],
      [-8.0572100275477, -1.4076162037562, -0.0198979875192],
      [-5.6769844723961, -1.3347687899915, -0.0163569841776],
      [-6.1406285113412, -1.4639287253884, -0.01909945509]
    ]
  )

  const handleChange = (value, index) => {
    const inTemp = [...defaults]
    inTemp[index] = value
    setDefaults(inTemp);
  }

  return (
    <div style={{ display: 'flex', padding: '1rem', overflow: 'auto' }}>
      <div style={{ display: 'flex' }}>
        <TableContainer size='md' style={{ width: '700px' }}>
          <Table>
            <Tbody>
              {[
                'Densidad',
                'Peso específico',
                'Cohesión',
                'Altura de talud (H)'
              ].map((label, index) => (
                <Tr key={index}>
                  <Td>
                    <Text width='120px' whiteSpace='collapse'>{label}</Text>
                  </Td>
                  <Td>
                    <Input width='100px'
                      placeholder='small size'
                      size='sm'
                      value={defaults[index]}
                      onChange={(e) => handleChange(parseFloat(e.target.value) || 0, index)}
                    />
                  </Td>
                </Tr>
              )
              )}
            </Tbody>
          </Table>
        </TableContainer>
        <CircularA defaults={defaults} fors={fors} />
        <CircularB defaults={defaults} fors={fors} />
        <CircularC defaults={defaults} fors={fors} />
        <CircularD defaults={defaults} fors={fors} />
        <CircularE defaults={defaults} fors={fors} />
        <CircularF defaults={defaults} fors={fors} />
      </div>
    </div>
  );
}

export default CircularFail;
