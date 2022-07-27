import { React } from 'react'
import expenses from '../data.json'
import { Box, Text, Flex, Tooltip } from '@chakra-ui/react'

function BarChart() {
    const amount = expenses.map((object) => {
        return object.amount
    })
    const largestNum = Math.max(...amount)
    return (
        <Flex p="1em" h="13em">
            {expenses.map((item, index) => {
                return (
                    <Flex
                        key={index}
                        direction={'column'}
                        justify={'flex-end'}
                        align={'space-between'}
                        p="0.25em"
                    >
                        <Tooltip label={`${item.amount}`} placement="top-end">
                            {item.amount === largestNum ? (
                                <Box
                                    borderRadius="base"
                                    w="2.2em"
                                    h={`${item.amount * 2}px`}
                                    bg="#76b5bc"
                                    _hover={{
                                        opacity: 0.5,
                                    }}
                                ></Box>
                            ) : (
                                <Box
                                    borderRadius="base"
                                    w="2.2em"
                                    h={`${item.amount * 2}px`}
                                    bg="#ec775f"
                                    _hover={{
                                        opacity: 0.5,
                                    }}
                                ></Box>
                            )}
                        </Tooltip>
                        <Text
                            mt="0.65em"
                            fontSize={'10px'}
                            color="gray.400"
                            textAlign={'center'}
                        >
                            {item.day}
                        </Text>
                    </Flex>
                )
            })}
        </Flex>
    )
}

export default BarChart
