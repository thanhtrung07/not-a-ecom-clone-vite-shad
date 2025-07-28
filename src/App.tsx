import Button from './components/ui/button'
import ReactSvg from './assets/react.svg?react'

function App() {
  console.log('>>>> import.meta.env.MODE', import.meta.env.MODE)
  console.log('>>>> import.meta.env.BASE_URL', import.meta.env.BASE_URL)
  console.log('>>>> import.meta.env.PROD', import.meta.env.PROD)
  console.log('>>>> import.meta.env.DEV', import.meta.env.DEV)
  console.log('>>>> import.meta.env.SSR', import.meta.env.SSR)
  console.log(
    '>>>> import.meta.env.VITE_SOME_KEY',
    import.meta.env.VITE_SOME_KEY
  )
  console.log(
    '>>>> import.meta.env.DB_PASSWORD',
    import.meta.env.DB_PASSWORD + 'string'
  )

  return (
    <div>
      <p className="text-amber-500">Hello</p>
      <Button asChild>
        <span>test</span>
      </Button>
      <ReactSvg className="size-16" />
    </div>
  )
}

export default App
