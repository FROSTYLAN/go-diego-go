import * as React from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Image, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Input, Text } from '@chakra-ui/react';
import Imagen7 from '../assets/Imagen7.png'
import Imagen8 from '../assets/Imagen8.png'

function RampDrilling() {
    const [ins, setIns] = React.useState([9.875, 15, 30, 1, 0.3, 0.7]);
    const [outs, setOuts] = React.useState([25, 25, 7, 17, 22, 'Cuadrada']);

    const handleChange = (value, index) => {
        const inTemp = [...ins]
        const outTemp = [...outs]
        inTemp[index] = value

        outTemp[0] = Number((inTemp[0] * inTemp[2]) / 12).toFixed(2)
        outTemp[1] = Number(Number(outTemp[0]) * inTemp[3]).toFixed(2)
        outTemp[2] = Number(Number(outTemp[0]) * inTemp[4]).toFixed(2)
        outTemp[3] = Number(Number(outTemp[0]) * inTemp[5]).toFixed(2)
        outTemp[4] = Number(Number(outTemp[2]) + inTemp[1]).toFixed(2)
debugger
        if (outTemp[1] / outTemp[0] === 1) {
            outTemp[5] = "Cuadrada";
        } else if (outTemp[1] / outTemp[0] >= 1) {
            outTemp[5] = "Rectangular";
        }

        setIns(inTemp);
        setOuts(outTemp)
    }

    return (
        <Card style={{ marginRight: '1rem' }}>
            <CardHeader>
                <Heading size='md'>Ramp Drilling</Heading>
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
                                        'Hole diameter',
                                        'Hole depth',
                                        'Kb',
                                        'Ks',
                                        'Kj',
                                        'Kt'
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
                                        'Burden',
                                        'Spacing',
                                        'Subdrilling',
                                        'Stemming',
                                        'Hole lenght',
                                        'Malla de perforación'
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
                        <Image src={Imagen7} alt='img4' width='800px' />
                        <Image src={Imagen8} alt='img4' width='800px' />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default RampDrilling;
