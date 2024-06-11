import * as React from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Image, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Input, Text } from '@chakra-ui/react';
import Imagen4 from '../assets/Imagen4.png'

function ShovelDimensions() {
    const [ins, setIns] = React.useState([19.75, 40, 35.25, 54.50]);
    const [outs, setOuts] = React.useState([18.29, 21.64, 33.22]);

    const handleChange = (value, index) => {
        const inTemp = [...ins]
        const outTemp = [...outs]
        inTemp[index] = value

        outTemp[0] = Number(Math.round(inTemp[0] + inTemp[1])).toFixed(2)
        outTemp[1] = Number(Math.round(2 * inTemp[2])).toFixed(2)
        outTemp[2] = Number(Math.round(2 * inTemp[3])).toFixed(2)

        setIns(inTemp);
        setOuts(outTemp);
    }

    return (
        <Card style={{ marginRight: '1rem' }}>
            <CardHeader>
                <Heading size='md'>Shovel dimensions 9yd3</Heading>
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
                                        'Clearance radius - revolving frame',
                                        'Clearance radius - boom point sheaves',
                                        'Radius of level floor',
                                        'Cutting radius - maximum'
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
                                        'Minumum width = K + J',
                                        'Maximum cut width (floor) = 2*G',
                                        'Maximum cut width (crest) = 2*E',
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
                        <Image src={Imagen4} alt='img4' width='800px' />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default ShovelDimensions;
