import * as React from 'react'

function useLocalStorageState(key, defaultValue = '') {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) ?? defaultValue
  )

  //Run when the key or state changes
  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

function Greeting({ initialName = '' }) {
  const [name, setName] = useLocalStorageState('name', initialName)    

  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function AppGreeting() {
  return <Greeting/>
}

export default AppGreeting
