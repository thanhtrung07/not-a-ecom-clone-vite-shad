import { useDispatch, useSelector } from 'react-redux'
import ReactSvg from './assets/react.svg?react'
import Button from './components/ui/button'
import type { AppDispatch, RootState } from './store'
import { decrement, increment } from './store/counterSlice'
import { useState } from 'react'
import axiosClient from './services/axiosClient'
import { useQuery } from '@tanstack/react-query'

function App() {
  const [countS, setCountS] = useState<number>(0)

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  // const _callApi = () => {
  //   axiosClient
  //     .get('https://pokeapi.co/api/v2/pokemon/ditto')
  //     .then((response) => {
  //       console.log('>>>>>>>>> response', response.data)
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error)
  //     })
  // }

  const _callApi2 = async () => {
    try {
      const data = await axiosClient.get(
        'https://pokeapi.co/api/v2/pokemon/ditto'
      )
      console.log('>>>>>>>>> response', data.data)
      return data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const query = useQuery({
    queryKey: ['ditto'],
    queryFn: _callApi2,
    enabled: false,
  })

  return (
    <div>
      <h1>Counter: {count}</h1>
      <h1>CounterS: {countS}</h1>
      <p className="text-amber-500">Hello</p>
      <Button onClick={() => dispatch(increment())}>test</Button>
      <Button
        onClick={() => {
          dispatch(increment())
          setCountS(countS + 1)
          dispatch(decrement())
        }}
      >
        test2
      </Button>
      <Button onClick={() => query.refetch()}>test 3</Button>
      <ReactSvg className="size-16" />
    </div>
  )
}

export default App
