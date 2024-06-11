import * as React from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Image, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Input, Text } from '@chakra-ui/react';
import Imagen12 from '../assets/Imagen12.png'

function OverallSlopeAngleOne() {
    const [ins, setIns] = React.useState([5, 2, 250, 25, 100, 75, 35, 125, 3]);
    const [outs, setOuts] = React.useState([37.1, 50, 75, 75, 53.7, 125, 50.4]);

    const handleChange = (value, index) => {
        const inTemp = [...ins]
        const outTemp = [...outs]
        const calTemp = []
        inTemp[index] = value

        calTemp[0] = inTemp[2] / inTemp[0]
        calTemp[1] = (calTemp[0] + inTemp[3]) / Math.tan((inTemp[5]) * (Math.PI / 180))
        calTemp[2] = (calTemp[0] + calTemp[0] + inTemp[3]) / Math.tan((inTemp[5]) * (Math.PI / 180))
        calTemp[3] = Math.round((Math.atan((calTemp[0] + inTemp[4]) / (inTemp[6] + calTemp[1])) * (180 / Math.PI)) * 10) / 10
        calTemp[4] = Math.round((Math.atan((outTemp[1] + outTemp[3]) / (inTemp[1] * inTemp[6] + inTemp[2])) * (180 / Math.PI)) * 10) / 10;

        outTemp[0] = Math.round((Math.atan(inTemp[2] / (inTemp[7] + inTemp[8] * inTemp[6] + inTemp[4])) * (180 / Math.PI)) * 10) / 10
        outTemp[1] = calTemp[0]
        outTemp[2] = inTemp[5]
        outTemp[3] = calTemp[0] + inTemp[3]
        outTemp[4] = calTemp[3] 
        outTemp[5] = outTemp[1] + outTemp[3]
        outTemp[6] = calTemp[4]

        setIns(inTemp);
        setOuts(outTemp)
    }

    return (
        <Card style={{ marginRight: '1rem', width: '400px' }}>
            <CardHeader>
                <Heading size='md'>Overall slope angle with one working bench and a ramp section and Interramp slope angles for a slope containing a working bench and a ramp</Heading>
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
                                        'Número de bancos totales',
                                        'Corte banco - IR-3',
                                        'Altura talud (H)',
                                        'Altura banco - rampa',
                                        'Angulo del talud',
                                        'Ancho de banco',
                                        'Working Bench',
                                        'Corte banco - rampa'
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
                                        'IR-1 | Altura',
                                        'IR-1 | Ángulo',
                                        'IR-2 | Altura',
                                        'IR-2 | Ángulo',
                                        'IR-3 | Altura',
                                        'IR-3 | Ángulo',
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
                        <Image src={Imagen12} alt='img12' />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default OverallSlopeAngleOne;
