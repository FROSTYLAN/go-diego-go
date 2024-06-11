import * as React from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Image, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Input, Text } from '@chakra-ui/react';
import Imagen10 from '../assets/Imagen10.png'

function OverallSlopeAngleInterramp() {
    const [ins, setIns] = React.useState([5, 4, 250, 125, 25, 75, 35, 2, 100]);
    const [outs, setOuts] = React.useState([39.2, 125, 50.4]);

    const handleChange = (value, index) => {
        const inTemp = [...ins]
        const outTemp = [...outs]
        const calcTemp = []
        inTemp[index] = value

        calcTemp[0] = inTemp[2] / inTemp[0]
        calcTemp[1] = Math.round((inTemp[0] * calcTemp[0]) / Math.tan(inTemp[5] * (Math.PI / 180)));
        calcTemp[2] = (inTemp[7] * calcTemp[0]) / Math.tan(inTemp[5] * (Math.PI / 180));
        calcTemp[3] = inTemp[4] / Math.tan(inTemp[5] * (Math.PI / 180));
        calcTemp[4] = Math.round((Math.atan(inTemp[3] / ((inTemp[7]) * inTemp[6] + calcTemp[2] + calcTemp[3])) * (180 / Math.PI)) * 10) / 10;

        outTemp[0] = Math.round((Math.atan((inTemp[0] * calcTemp[0]) / (inTemp[1] * inTemp[6] + calcTemp[1] + inTemp[8])) * (180 / Math.PI)) * 10) / 10;
        outTemp[1] = (Number(outTemp[0]) * inTemp[7]) + inTemp[4]
        outTemp[2] = calcTemp[4]
debugger
        setIns(inTemp);
        setOuts(outTemp)
    }

    return (
        <Card style={{ marginRight: '1rem', width: '400px' }}>
            <CardHeader>
                <Heading size='md'>Overall slope angle and Interramp slope angles with ramp included</Heading>
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
                                        'Número de bancos',
                                        'Número ancho bancos',
                                        'Altura (H)',
                                        'Altura entre rampa (H)',
                                        'Altura banco - rampa',
                                        'Angulo del talud',
                                        'Ancho de banco',
                                        'Número bancos rampa',
                                        'Ancho de rampa'
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
                                        'Overall',
                                        'IR-1, 2 | Altura',
                                        'IR-1, 2 | Ángulo'
                                    ].map((label, index) => (
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
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Box>
                        <Image src={Imagen10} alt='img10' />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default OverallSlopeAngleInterramp;
