import * as React from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Image, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Input, Text } from '@chakra-ui/react';
import Imagen20 from '../assets/Imagen20.png'

function CircularA({ defaults, fors }) {
    const [ins, setIns] = React.useState([30, 70]);
    const [outs, setOuts] = React.useState([34, '-', 5.69, 56.80, '-', 4.56, 45.48, '-', 4.28, 42.69, '-', 3.41, 34.01]);

    const handleChange = (value, index) => {
        const inTemp = [...ins]
        const outTemp = [...outs]
        inTemp[index] = value

        outTemp[0] = inTemp[1] - (1.2 * inTemp[0])
        outTemp[1] = '-'
        outTemp[2] = Number(fors[0][0] / (1 + fors[0][1] * Math.exp(-fors[0][2] * outTemp[0]))).toFixed(2)
        outTemp[3] = Number(defaults[2] * outTemp[2] / defaults[1]).toFixed(2)
        outTemp[4] = '-'
        outTemp[5] = Number(fors[1][0] / (1 + fors[1][1] * Math.exp(-fors[1][2] * outTemp[0]))).toFixed(2)
        outTemp[6] = Number(defaults[2] * outTemp[5] / defaults[1]).toFixed(2)
        outTemp[7] = '-'
        outTemp[8] = Number(fors[2][0] / (1 + fors[2][1] * Math.exp(-fors[2][2] * outTemp[0]))).toFixed(2)
        outTemp[9] = Number(defaults[2] * outTemp[8] / defaults[1]).toFixed(2)
        outTemp[10] = '-'
        outTemp[11] = Number(fors[3][0] / (1 + fors[3][1] * Math.exp(-fors[3][2] * outTemp[0]))).toFixed(2)
        outTemp[12] = Number(defaults[2] * outTemp[11] / defaults[1]).toFixed(2)

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
                                        'x',
                                        'Para FS = 1.4',
                                        'Y',
                                        'H',
                                        'Para FS = 1.5',
                                        'Y',
                                        'H',
                                        'Para FS = 1.6',
                                        'Y',
                                        'H',
                                        'Para FS = 1.8',
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
                        <Image src={Imagen20} alt='img5' width='800px' />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default CircularA;
