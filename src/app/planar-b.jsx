import * as React from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Image, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Input, Text } from '@chakra-ui/react';
import Imagen15 from '../assets/Imagen15.png'

function PlanarB({ defaults }) {
    const [ins, setIns] = React.useState([30, 50, 50]);
    const [outs, setOuts] = React.useState([50, '-', 17.50, 57.63, '-', 13.47, 56.35, '-', 11.86, 55.94, '-', 10.26, 55.57]);

    const handleChange = (value, index) => {
        const inTemp = [...ins]
        const outTemp = [...outs]
        inTemp[index] = value

        outTemp[0] = Number(Number(defaults[3] * defaults[1] / defaults[2])).toFixed(2)
        outTemp[1] = '-'
        outTemp[2] = Number((3740.7 / Number(outTemp[0])) ^ (1000 / 1507)).toFixed(2)
        outTemp[3] = Number(((Number(outTemp[2]) / 2) ^ 2/(Number(inTemp[1]) - Number(inTemp[0]))) + Number(inTemp[1])).toFixed(2)
        outTemp[4] = '-'
        outTemp[5] = Number(((1924.7 / Number(outTemp[0])) ^ (1000 / 1403))).toFixed(2)
        outTemp[6] = Number(((Number(outTemp[5]) / 2) ^ 2 / (Number(inTemp[1]) - Number(inTemp[0]))) + Number(inTemp[1])).toFixed(2)
        outTemp[7] = '-'
        outTemp[8] = Number((1401.4 / Number(outTemp[0])) ^ (1000 / 1347)).toFixed(2)
        outTemp[9] = Number(((Number(outTemp[8]) / 2) ^ 2 / (Number(inTemp[1]) - Number(inTemp[0]))) + Number(inTemp[1])).toFixed(2)
        outTemp[10] = '-'
        outTemp[11] = Number((1035.5 / Number(outTemp[0])) ^ (1000 / 1301)).toFixed(2)
        outTemp[12] = Number(((Number(outTemp[11]) / 2) ^ 2 / (Number(inTemp[1]) - Number(inTemp[0]))) + Number(inTemp[1])).toFixed(2)

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
                                        'Y',
                                        'Para FS = 1',
                                        'X',
                                        'H',
                                        'Para FS = 1.2',
                                        'X',
                                        'H',
                                        'Para FS = 1.3',
                                        'X',
                                        'H',
                                        'Para FS = 1.4',
                                        'X',
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
                        <Image src={Imagen15} alt='img5' width='800px' />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default PlanarB
