import * as React from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Image, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Input, Text } from '@chakra-ui/react';
import Imagen19 from '../assets/Imagen19.png'

function PlanarF({ defaults }) {
    const [ins, setIns] = React.useState([100, 30, 70, 50]);
    const [outs, setOuts] = React.useState([80.00, '-', 12.83, '-', 9.65, '-', 8.38, '-', 7.16]);

    const handleChange = (value, index) => {
        const inTemp = [...ins]
        const outTemp = [...outs]
        inTemp[index] = value

        outTemp[0] = Number((1 + (3 * Number(inTemp[0])) / Number(defaults[3])) * (Number(defaults[3]) * Number(defaults[1]) / Number(defaults[2]))).toFixed(2);
        outTemp[1] = '-';
        outTemp[2] = Number(Math.pow(3740.7 / Number(outTemp[0]), 1000 / 1507)).toFixed(2);
        outTemp[3] = '-';
        outTemp[4] = Number(Math.pow(1924.7 / Number(outTemp[0]), 1000 / 1403)).toFixed(2);
        outTemp[5] = '-';
        outTemp[6] = Number(Math.pow(1401.4 / Number(outTemp[0]), 1000 / 1347)).toFixed(2);
        outTemp[7] = '-';
        outTemp[8] = Number(Math.pow(1035.5 / Number(outTemp[0]), 1000 / 1301)).toFixed(2);

        setIns(inTemp);
        setOuts(outTemp)
    }

    return (
        <Card style={{ marginRight: '1rem' }}>
            <CardHeader>
                <Heading size='md'>CASO F: Grieta de tracción rellenada con agua</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Datos
                        </Heading>
                        <TableContainer size='sm'>
                            <Table>
                                <Tbody>
                                    {[
                                        'Nivel de agua desde la superficie (Zo)',
                                        'Ángulo de fricción (f)',
                                        'Ángulo de talud (i)',
                                        'Ángulo de falla (b)'
                                    ].map((label, index) => (
                                        <Tr key={index}>
                                            <Td>
                                                <Text width='120px' whiteSpace='collapse'>{label}</Text>
                                            </Td>
                                            <Td>
                                                <Input width='100px'
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
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Cálculos
                        </Heading>
                        <TableContainer size='sm'>
                            <Table>
                                <Tbody>
                                    {[
                                        'Y',
                                        'Para FS = 1',
                                        'X',
                                        'Para FS = 1.2',
                                        'X',
                                        'Para FS = 1.3',
                                        'X',
                                        'Para FS = 1.4',
                                        'X',
                                    ].map((label, index) => {
                                        if (index === 1 || index === 3 || index === 5 || index === 7) {
                                            return (
                                                <Tr key={index}>
                                                    <Td>
                                                        <Text width='120px' whiteSpace='collapse' fontWeight={600}>{label}</Text>
                                                    </Td>
                                                    <Td></Td>
                                                </Tr>
                                            )
                                        } else {
                                            return (
                                                <Tr key={index}>
                                                    <Td>
                                                        <Text width='120px' whiteSpace='collapse'>{label}</Text>
                                                    </Td>
                                                    <Td>
                                                        <Input width='100px'
                                                            placeholder='small size'
                                                            size='sm'
                                                            disabled
                                                            value={outs[index]}
                                                            onChange={(e) => handleChange(parseFloat(e.target.value) || 0, index)}
                                                        />
                                                    </Td>
                                                </Tr>
                                            )
                                        }
                                    })}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Box>
                        <Image src={Imagen19} alt='img5' width='800px' />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default PlanarF
