import * as React from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Image, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Input, Text } from '@chakra-ui/react';
import Imagen14 from '../assets/Imagen14.png'

function PlanarA({ defaults }) {
    const [ins, setIns] = React.useState([30, 70, 50]);
    const [outs, setOuts] = React.useState([40, '-', 14.41, 143.86, '-', 10.88, 108.86, '-', 9.74, 97.25, '-', 8.52, 85.11]);

    const handleChange = (value, index) => {
        const inTemp = [...ins]
        const outTemp = [...outs]
        inTemp[index] = value

        outTemp[0] = Number(2 * Math.sqrt((Number(inTemp[1]) - Number(inTemp[2])) * (Number(inTemp[2]) - Number(inTemp[0])))).toFixed(2)
        outTemp[1] = '-'
        outTemp[2] = Number(3740.7 * Math.pow(Number(outTemp[0]), -1.507)).toFixed(2)
        outTemp[3] = Number(Number(defaults[2]) * Number(outTemp[2]) / Number(defaults[1])).toFixed(2)
        outTemp[4] = '-'
        outTemp[5] = Number(1924.7 * Math.pow(Number(outTemp[0]), -1.403)).toFixed(2)
        outTemp[6] = Number(Number(defaults[2]) * Number(outTemp[5]) / Number(defaults[1])).toFixed(2)
        outTemp[7] = '-'
        outTemp[8] = Number(1401.4 * Math.pow(Number(outTemp[0]), -1.347)).toFixed(2)
        outTemp[9] = Number(Number(defaults[2]) * Number(outTemp[8]) / Number(defaults[1])).toFixed(2)
        outTemp[10] = '-'
        outTemp[11] = Number(1035 * Math.pow(Number(outTemp[0]), -1.301)).toFixed(2)
        outTemp[12] = Number(Number(defaults[2]) * Number(outTemp[11]) / Number(defaults[1])).toFixed(2)

        setIns(inTemp);
        setOuts(outTemp)
    }

    return (
        <Card style={{ marginRight: '1rem' }}>
            <CardHeader>
                <Heading size='md'>CASO A: Talud drenado</Heading>
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
                                        'X',
                                        'Para FS = 1',
                                        'Y',
                                        'H',
                                        'Para FS = 1.2',
                                        'Y',
                                        'H',
                                        'Para FS = 1.3',
                                        'Y',
                                        'H',
                                        'Para FS = 1.4',
                                        'Y',
                                        'H',
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
                        <Image src={Imagen14} alt='img5' width='800px' />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default PlanarA;
