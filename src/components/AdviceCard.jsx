import { Box, Text, Button, Image } from '@chakra-ui/react'
import { useGetAdvice } from '../hooks/useGetAdvice'
import desktopSeparator from '../assets/pattern-divider-desktop.svg'
import mobileSeparator from '../assets/pattern-divider-mobile.svg'

export const AdviceCard = () => {
  const { advice, loading, fetchAdvice, error } = useGetAdvice()

  return (
    <Box
      as='article'
      w={{ base: '100%', md: '45%' }}
      h='fit-content'
      textAlign='center'
      bgColor='neutral.dark-grayish-blue'
      borderRadius='10px'
      padding='2.5rem'
      position='relative'
    >
      {error && <Text fontSize='25px' my='2rem' color='red.500'>{error}</Text>}
      {
        advice &&
          <>
            <Text
              textTransform='uppercase'
              color='primary.neon-green'
              letterSpacing='5px'
              fontSize={{ base: '12px', md: '14px' }}
            >
              Advice #{advice.id}
            </Text>
            <Text mt='1rem' fontSize={{ base: '18px', md: '18px', lg: '22px' }}>
              {advice.advice}
            </Text>
          </>
      }
      <Image
        mx='auto'
        src={mobileSeparator}
        srcSet={`${desktopSeparator} 600w, ${desktopSeparator} 1200w`}
        my='1rem'
      />
      <Button
        onClick={fetchAdvice}
        position='absolute'
        left='50%'
        transform='translateX(-50%)'
        bottom='-20px'
        bgColor='primary.neon-green'
      >
        {loading ? 'Loading...' : 'New Advice'}
      </Button>
    </Box>
  )
}
