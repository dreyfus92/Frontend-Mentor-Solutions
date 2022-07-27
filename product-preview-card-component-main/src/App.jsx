import React from 'react'
import {
    Text,
    Image,
    Flex,
    Button,
    Box,
    Center,
    useMediaQuery,
} from '@chakra-ui/react'

import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function App() {
    const [isLargerThan400] = useMediaQuery('(min-width: 400px)')

    return (
        <>
            <Box p={'1em'}>
                <Center>
                    <Flex
                        direction={['column', 'row']}
                        borderRadius="10px"
                        bg="white"
                        w={'40em'}
                        mt={['0', '10em']}
                    >
                        {isLargerThan400 ? (
                            <Image
                                src="../images/image-product-desktop.jpg"
                                objectFit="cover"
                                width="50%"
                                borderRadius={'10px 0 0 10px'}
                            />
                        ) : (
                            <Image
                                src="../images/image-product-mobile.jpg"
                                objectFit="cover"
                                borderRadius={'10px 10px 0 0'}
                            />
                        )}
                        <Flex direction="column" p="2em">
                            <Text
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 300,
                                    fontSize: '12px',
                                    color: 'gray.700',
                                    mb: '1.5em',
                                }}
                            >
                                P E R F U M E
                            </Text>
                            <Text
                                sx={{
                                    fontFamily: 'IBM Plex Serif',
                                    fontWeight: 700,
                                    fontSize: '33px',
                                    color: 'black',
                                    lineHeight: '1em',
                                    mb: '0.75em',
                                }}
                            >
                                Gabrielle Essence Eau De Parfum
                            </Text>
                            <Text
                                sx={{
                                    fontFamily: 'Montserrat',
                                    fontWeight: 300,
                                    fontSize: '15px',
                                    color: 'gray.700',
                                    mb: '3em',
                                }}
                            >
                                A floral, solar and voluptuous interpretation
                                composed by Olivier Polge, Perfumer-Creator for
                                the House of CHANEL.
                            </Text>
                            <Flex alignItems={'center'}>
                                <Text
                                    sx={{
                                        fontFamily: 'Abhaya Libre',
                                        fontWeight: 700,
                                        fontSize: '45px',
                                        color: 'green.700',
                                        mr: '0.35em',
                                    }}
                                >
                                    $149.99
                                </Text>
                                <Text
                                    sx={{
                                        fontFamily: 'Montserrat',
                                        fontSize: '15px',
                                        color: 'gray.600',
                                        textDecoration: 'line-through',
                                    }}
                                >
                                    $169.99
                                </Text>
                            </Flex>
                            <Button
                                p={['0em', '1.5em']}
                                leftIcon={<AiOutlineShoppingCart />}
                                colorScheme="green"
                                bg="green.600"
                            >
                                Add to Cart
                            </Button>
                        </Flex>
                    </Flex>
                </Center>
                <div className="attribution">
                    Challenge by{' '}
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                    >
                        Frontend Mentor
                    </a>
                    . Coded by{' '}
                    <a href="https://github.com/dreyfus92" target="_blank">
                        Paul Valladares
                    </a>
                    .
                </div>
            </Box>
        </>
    )
}
