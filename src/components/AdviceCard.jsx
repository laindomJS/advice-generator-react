import { Box, Text, Button, Image, SkeletonText } from '@chakra-ui/react'
import { useGetAdvice } from '../hooks/useGetAdvice'
import desktopSeparator from '../assets/pattern-divider-desktop.svg'
import mobileSeparator from '../assets/pattern-divider-mobile.svg'
import dice from '../assets/icon-dice.svg'

export const AdviceCard = () => {
  const { advice, loading, fetchAdvice, error } = useGetAdvice()

  return (
    <Box
      as='article'
      w={{ base: '100%', md: '65%', lg: '45%' }}
      h='fit-content'
      textAlign='center'
      bgColor='neutral.dark-grayish-blue'
      borderRadius='10px'
      padding='2.5rem'
      position='relative'
      boxShadow='lg'
    >
      {error && <Text fontSize='25px' my='2rem' color='red.500'>{error}</Text>}
      {
        loading
          ? <SkeletonText
              noOfLines={4}
              spacing='4'
              skeletonHeight='4'
            />
          : (
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
            )
      }
      <Image
        mx='auto'
        src={mobileSeparator}
        srcSet={`${desktopSeparator} 600w, ${desktopSeparator} 1200w`}
        mt='1.8rem'
      />
      <Button
        onClick={fetchAdvice}
        position='absolute'
        left='50%'
        transform='translateX(-50%)'
        bottom='-30px'
        bgColor='primary.neon-green'
        borderRadius='50%'
        h='50px'
        w='50px'
        transition='.2s ease-in'
        _hover={{ opacity: 0.8 }}
      >
        <Image
          src={dice}
          alt='icon dice'
        />
      </Button>
    </Box>
  )
}
