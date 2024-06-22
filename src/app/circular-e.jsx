import * as React from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Image, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Input, Text } from '@chakra-ui/react';
import Imagen24 from '../assets/Imagen24.png'

function CircularE({ defaults, fors }) {
    const [ins, setIns] = React.useState([350, 30, 70]);
    const [outs, setOuts] = React.useState([44.50, '-', 4.20, '-', 3.34, '-', 3.22, '-', 2.53]);

    const handleChange = (value, index) => {
        const inTemp = [...ins]
        const outTemp = [...outs]
        inTemp[index] = value

        outTemp[0] = Number(inTemp[2] - inTemp[1] * (1.2 - 0.5 * (inTemp[0] / defaults[3]))).toFixed(2)
        outTemp[1] = '-'
        outTemp[2] = Number(fors[0][0] / (1 + fors[0][1] * Math.exp(-fors[0][2] * Number(outTemp[0])))).toFixed(2)
        outTemp[3] = '-'
        outTemp[4] = Number(fors[1][0] / (1 + fors[1][1] * Math.exp(-fors[1][2] * Number(outTemp[0])))).toFixed(2)
        outTemp[5] = '-'
        outTemp[6] = Number(fors[2][0] / (1 + fors[2][1] * Math.exp(-fors[2][2] * Number(outTemp[0])))).toFixed(2)
        outTemp[7] = '-'
        outTemp[8] = Number(fors[3][0] / (1 + fors[3][1] * Math.exp(-fors[3][2] * Number(outTemp[0])))).toFixed(2)

        setIns(inTemp);
        setOuts(outTemp)
    }

    return (
        <Card style={{ marginRight: '1rem' }}>
            <CardHeader>
                <Heading size='md'>CASO E: Flujo de agua horizontal</Heading>
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
                                        'Altura de agua (Hw)',
                                        'Ángulo de fricción (f)',
                                        'Ángulo de talud (i)'
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
                                        'X',
                                        'Para FS = 1.4',
                                        'Y',
                                        'Para FS = 1.5',
                                        'Y',
                                        'Para FS = 1.6',
                                        'Y',
                                        'Para FS = 1.8',
                                        'Y',
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
                        <Image src={Imagen24} alt='img5' width='800px' />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default CircularE;
