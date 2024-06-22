import * as React from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Image, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Input, Text } from '@chakra-ui/react';
import Imagen21 from '../assets/Imagen21.png'

function CircularB({ defaults, fors }) {
    const [ins, setIns] = React.useState([30]);
    const [outs, setOuts] = React.useState([50, '-', -8.11, 27.89, '-', -9.69, 26.31, '-', -11.09, 24.91, '-', -13.90, 22.10]);

    const handleChange = (value, index) => {
        const inTemp = [...ins]
        const outTemp = [...outs]
        inTemp[index] = value

        outTemp[0] = Number(defaults[1] * defaults[3] / defaults[2]).toFixed(2)
        outTemp[1] = '-'
        outTemp[2] = Number(1 / fors[0][2] * Math.log(fors[0][1] * outTemp[0] / (fors[0][0] - outTemp[0]))).toFixed(2)
        outTemp[3] = Number(Number(outTemp[2]) + (1.2 * Number(inTemp[0]))).toFixed(2)
        outTemp[4] = '-'
        outTemp[5] = Number(1 / fors[1][2] * Math.log(fors[1][1] * outTemp[0] / (fors[1][0] - outTemp[0]))).toFixed(2)
        outTemp[6] = Number(Number(outTemp[5]) + (1.2 * Number(inTemp[0]))).toFixed(2)
        outTemp[7] = '-'
        outTemp[8] = Number(1 / fors[2][2] * Math.log(fors[2][1] * outTemp[0] / (fors[2][0] - outTemp[0]))).toFixed(2)
        outTemp[9] = Number(Number(outTemp[8]) + (1.2 * Number(inTemp[0]))).toFixed(2)
        outTemp[10] = '-'
        outTemp[11] = Number(1 / fors[3][2] * Math.log(fors[3][1] * outTemp[0] / (fors[3][0] - outTemp[0]))).toFixed(2)
        outTemp[12] = Number(Number(outTemp[11]) + (1.2 * Number(inTemp[0]))).toFixed(2)

        setIns(inTemp);
        setOuts(outTemp)
    }

    return (
        <Card style={{ marginRight: '1rem' }}>
            <CardHeader>
                <Heading size='md'>CASO B: Sin grieta de tracción</Heading>
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
                                        'Ángulo de fricción (f)',
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
                                        'Ángulo de talud (i)',
                                        'Para FS = 1.5',
                                        'X',
                                        'Ángulo de talud (i)',
                                        'Para FS = 1.6',
                                        'X',
                                        'Ángulo de talud (i)',
                                        'Para FS = 1.8',
                                        'X',
                                        'Ángulo de talud (i)',
                                    ].map((label, index) => {
                                        if (index === 1 || index === 4 || index === 7 || index === 10) {
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
                        <Image src={Imagen21} alt='img5' width='800px' />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default CircularB;
