import * as React from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Image, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Input, Text } from '@chakra-ui/react';
import Imagen25 from '../assets/Imagen25.png'

function CircularF({ defaults, fors }) {
    const [ins, setIns] = React.useState([150, 30, 70]);
    const [outs, setOuts] = React.useState([59.09, '-', -9.38, '-', -10.76, '-', -12.05, '-', -14.78]);

    const handleChange = (value, index) => {
        const inTemp = [...ins]
        const outTemp = [...outs]
        inTemp[index] = value

        outTemp[0] = Number((1 + ((inTemp[2] - 10) / 100) * (inTemp[0] / defaults[3])) * (defaults[1] * defaults[3]) / defaults[2]).toFixed(2);
        outTemp[1] = '-';
        outTemp[2] = Number((1 / fors[0][2] * Math.log(fors[0][1] * Number(outTemp[0]) / (fors[0][0] - Number(outTemp[0])))).toFixed(2));
        outTemp[3] = '-';
        outTemp[4] = Number((1 / fors[1][2] * Math.log(fors[1][1] * Number(outTemp[0]) / (fors[1][0] - Number(outTemp[0])))).toFixed(2));
        outTemp[5] = '-';
        outTemp[6] = Number((1 / fors[2][2] * Math.log(fors[2][1] * Number(outTemp[0]) / (fors[2][0] - Number(outTemp[0])))).toFixed(2));
        outTemp[7] = '-';
        outTemp[8] = Number((1 / fors[3][2] * Math.log(fors[3][1] * Number(outTemp[0]) / (fors[3][0] - Number(outTemp[0])))).toFixed(2));
        
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
                                        'Y',
                                        'Para FS = 1.4',
                                        'X',
                                        'Para FS = 1.5',
                                        'X',
                                        'Para FS = 1.6',
                                        'X',
                                        'Para FS = 1.8',
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
                        <Image src={Imagen25} alt='img5' width='800px' />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default CircularF;
