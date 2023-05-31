import { chakra } from '@chakra-ui/react'
import { AdviceCard } from './components/AdviceCard'

function App () {
  return (
    <chakra.main
      w='100%'
      minH='100vh'
      bgColor='neutral.dark-blue'
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <AdviceCard />
    </chakra.main>
  )
}

export default App
