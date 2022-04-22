import { Container } from '@chakra-ui/react'
import CoinTable from './components/CoinTable'

const App = () => {
  return (
    <Container maxW={'container.xl'}>
      <CoinTable/>
    </Container>
  )
}

export default App
