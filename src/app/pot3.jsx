import * as React from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Image, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Input, Text } from '@chakra-ui/react';
import Imagen11 from '../assets/Imagen11.png'

function OverallSlopeAngleWorking() {
    const [ins, setIns] = React.useState([5, 4, 250, 200, 75, 35, 125]);
    const [outs, setOuts] = React.useState([37, 50, 75, 200, 51.6]);

    const handleChange = (value, index) => {
        const inTemp = [...ins]
        const outTemp = [...outs]
        const calTemp = []
        inTemp[index] = value

        calTemp[0] = inTemp[2] / inTemp[0]
        calTemp[1] = inTemp[0] * calTemp[0] / Math.tan(inTemp[4] * (Math.PI / 180))
        calTemp[2] = ((inTemp[0] - 1) * calTemp[0]) / Math.tan(inTemp[4] * (Math.PI / 180))
        calTemp[3] = inTemp[2] - (inTemp[0] - 1) * calTemp[0]
        calTemp[4] = inTemp[2] - calTemp[3]
        calTemp[5] = Math.round((Math.atan(inTemp[3] / ((inTemp[1] - 1) * inTemp[5] + calTemp[2])) * (180 / Math.PI)) * 10) / 10

        outTemp[0] = Math.round((Math.atan((inTemp[0] * calTemp[0]) / (inTemp[6] + inTemp[1] * inTemp[5] + calTemp[1])) * (180 / Math.PI)) * 10) / 10
        outTemp[1] = calTemp[0]
        outTemp[2] = inTemp[4]
        outTemp[3] = calTemp[4]
        outTemp[4] = calTemp[5]

        setIns(inTemp);
        setOuts(outTemp)
    }

    return (
        <Card style={{ marginRight: '1rem', width: '400px' }}>
            <CardHeader>
                <Heading size='md'>Overall slope angle with working bench included and Interramp angles associated with the working bench</Heading>
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
                                        'Número de bancos debajo rampa',
                                        'Altura (H)',
                                        'Altura entre rampa (H)',
                                        'Angulo del talud',
                                        'Ancho de banco',
                                        'ancho rampa'
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
                                        'IR-2 | Ángulo'
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
                        <Image src={Imagen11} alt='img11' />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default OverallSlopeAngleWorking;
