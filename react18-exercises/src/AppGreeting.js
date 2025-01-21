import * as React from 'react'

function Greeting({initialName = ''}) {
    const [name, setName] = React.useState(initialName)  

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
  return <Greeting initialName="Juana" />
}

export default AppGreeting
