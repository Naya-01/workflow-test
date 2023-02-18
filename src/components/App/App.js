import Numbers from 'components/Numbers/Numbers'
import { useState, useEffect } from 'react'
import personService from 'services/persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })

  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const AlreadyAdded = persons.filter(p => p.name == newName);
    if (AlreadyAdded.length != 0) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const PersonObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    personService
      .create(PersonObject)
      .then(response => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)

    console.log(persons)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)

    console.log(persons)
  }
  console.log(persons, "je sais pas")

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number : <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Numbers persons={persons} />
    </div>
  )
}

export default App