import { Box, Text } from '@chakra-ui/react'
import { useGetAdvice } from '../hooks/useGetAdvice'

export const AdviceCard = () => {
  const { advice, loading } = useGetAdvice()

  if (loading || !advice) {
    return <Text>Loading...</Text>
  }

  return (
    <Box
      w='45%'
      h='fit-content'
      textAlign='center'
      bgColor='neutral.dark-grayish-blue'
      borderRadius='10px'
    >
      <Text>Hello World</Text>
      <Text>{advice && advice.advice}</Text>
    </Box>
  )
}
