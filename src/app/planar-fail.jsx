import * as React from 'react';
import PlanarA from './planar-a';
import PlanarB from './planar-b';
import PlanarC from './planar-c';
import PlanarD from './planar-d';
import PlanarE from './planar-e';
import PlanarF from './planar-f';
import { TableContainer, Table, Tr, Tbody, Td, Input, Text } from '@chakra-ui/react';

function PlanarFail() {
    const [defaults, setDefaults] = React.useState([2.495, 160.00, 1600, 500])

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
                                'profundidad (H)'
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
                <PlanarA defaults={defaults} />
                <PlanarB defaults={defaults} />
                <PlanarC defaults={defaults} />
                <PlanarD defaults={defaults} />
                <PlanarE defaults={defaults} />
                <PlanarF defaults={defaults} />
            </div>
        </div>
    );
}

export default PlanarFail;
