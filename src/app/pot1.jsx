import * as React from 'react';
import { Card, CardHeader, CardBody, Heading, Stack, StackDivider, Box, Image, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Input, Text } from '@chakra-ui/react';
import Imagen9 from '../assets/Imagen9.png'

function OveralSlopeAngle() {
    const [ins, setIns] = React.useState([5, 250, 4, 35, 75]);
    const [outs, setOuts] = React.useState([50.4]);

    const handleChange = (value, index) => {
        const inTemp = [...ins]
        const outTemp = [...outs]
        inTemp[index] = value

        const radiansToDegrees = (radians) => radians * (180 / Math.PI);

        const intermediateValue = (inTemp[0] * inTemp[1] / inTemp[0]) / ((inTemp[2] * inTemp[3]) + Math.round((inTemp[0] * inTemp[1] / inTemp[0]) / Math.tan(inTemp[4] * (Math.PI / 180))));
        const atanValue = Math.atan(intermediateValue);
        const degreesValue = radiansToDegrees(atanValue);
        outTemp[0] = Math.round(degreesValue * 10) / 10;

        setIns(inTemp);
        setOuts(outTemp)
    }

    return (
        <Card style={{ marginRight: '1rem', width: '400px' }}>
            <CardHeader>
                <Heading size='md'>Overall Slope Angle</Heading>
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
                                        'Altura (H)',
                                        'Número bancos rampa',
                                        'Ancho de banco',
                                        'Angulo del talud'
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
                                        'Overall'
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
                        <Image src={Imagen9} alt='img9' />
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default OveralSlopeAngle;
