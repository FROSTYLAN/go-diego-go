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
        <CircularA defaults={defaults}/>
        <CircularB defaults={defaults}/>
        <CircularC defaults={defaults}/>
        <CircularD defaults={defaults}/>
        <CircularE defaults={defaults}/>
        <CircularF defaults={defaults}/>
      </div>
    </div>
  );
}

export default CircularFail;
