import * as React from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Image, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Input, Text } from '@chakra-ui/react';
import Imagen7 from '../assets/Imagen7.png'
import Imagen8 from '../assets/Imagen8.png'

function RampDrilling() {
    const [ins, setIns] = React.useState([2.3, 12.25, 40, 'Anfo', 0.8, 5, 5, 25, 1, 0.3, 0.7]);
    const [outs, setOuts] = React.useState([25, 25, 7.5, 17.5, 47.5, 30, 40.9, 1227, 1.3, 925.9, 1437500, 'Cuadrada']);

    const handleChange = (value, index) => {
        const inTemp = [...ins]
        const outTemp = [...outs]
        inTemp[index] = value

        // modifica aquí
        outTemp[0] = Math.floor((inTemp[7] * inTemp[1]) / 12);
        outTemp[1] = outTemp[0] * inTemp[8]
        outTemp[2] = inTemp[9] * outTemp[0]
        outTemp[3] = outTemp[0] * inTemp[10]
        outTemp[4] = outTemp[2] + inTemp[2]
        outTemp[5] = outTemp[4] - outTemp[3]
        outTemp[6] = Math.round(0.3405 * inTemp[4] * Math.pow(inTemp[1], 2) * 10) / 10
        outTemp[7] = outTemp[6] * outTemp[5]
        outTemp[8] = (outTemp[7] * 27) / (inTemp[2] * outTemp[0] * outTemp[1])
        outTemp[9] = outTemp[7] / outTemp[8]
        outTemp[10] = inTemp[2] * outTemp[0] * outTemp[1] * inTemp[0] * inTemp[5] * inTemp[6]
 
        if (outTemp[1] / outTemp[0] === 1) {
            outTemp[11] = "Cuadrada";
        } else if (outTemp[1] / outTemp[0] >= 1) {
            outTemp[11] = "Rectangular";
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
                                        'Densidad de la roca',
                                        'Díametro del taladro',
                                        'Altura de banco',
                                        'Explosivo',
                                        'Densidad del explosivo',
                                        'Filas',
                                        'Tal/fila',
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
                                                    size='sm'
                                                    type={index === 3 ? 'text' : 'number'}
                                                    disabled={index === 3 ? true : false}
                                                    placeholder='Ingresa valor'
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
                                        'Load lenght',
                                        'LD',
                                        'Wexp',
                                        'PF',
                                        'Vexp',
                                        'Ton',
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
