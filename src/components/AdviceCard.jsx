import { Box, Text, Button } from '@chakra-ui/react'
import { useGetAdvice } from '../hooks/useGetAdvice'

export const AdviceCard = () => {
  const { advice, loading, fetchAdvice } = useGetAdvice()

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
      padding='2.5rem'
    >
      <Text
        textTransform='uppercase'
        color='primary.neon-green'
        letterSpacing='5px'
        fontSize='14px'
      >
        Advice #{advice.id}
      </Text>
      <Text mt='1rem' fontSize='24px'>
        {advice && advice.advice}
      </Text>
      <Button onClick={fetchAdvice}>New Advice</Button>
    </Box>
  )
}
