import { React, useState } from 'react'
import {
    Text,
    Box,
    Link,
    Heading,
    Flex,
    Image,
    Divider,
} from '@chakra-ui/react'
import expenses from './data.json'
import BarChart from './components/BarChart'

function App() {
    const sum = expenses.reduce((accumulator, object) => {
        return accumulator + object.amount
    }, 0)

    return (
        <>
            <Box w="26em" p="1em" borderRadius={'lg'} mx={'auto'} my={'8em'}>
                <Flex
                    justify={'space-between'}
                    p="1em"
                    bg="#ec775f"
                    borderRadius={'xl'}
                >
                    <Flex direction={'column'} ml="0.25em">
                        <Text color="white" fontFamily={'DM Sans'}>
                            My balance
                        </Text>
                        <Heading size="lg" color="white" fontFamily={'DM Sans'}>
                            ${sum}
                        </Heading>
                    </Flex>
                    <Image src="images/logo.svg" w="15%" mr="0.75em" />
                </Flex>
                <Box bg="white" mt="1em" borderRadius={'lg'} p="2em">
                    <Heading size="md" fontFamily={'DM Sans'}>
                        Spending - Last 7 days
                    </Heading>
                    <BarChart />
                    <Divider mb="1em" />
                    <Flex justify={'space-between'}>
                        <Flex direction={'column'}>
                            <Text color="gray.400" fontFamily={'DM Sans'}>
                                Total this month
                            </Text>
                            <Heading size="lg" color="black">
                                $478.33
                            </Heading>
                        </Flex>
                        <Flex direction={'column'} justify={'flex-end'}>
                            <Text
                                textAlign={'right'}
                                fontWeight="700"
                                fontFamily={'DM Sans'}
                            >
                                +2.4%
                            </Text>
                            <Text
                                fontSize={'12px'}
                                color="gray.400"
                                fontFamily={'DM Sans'}
                            >
                                from last month
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default App
