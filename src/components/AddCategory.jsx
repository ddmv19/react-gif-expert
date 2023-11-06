/* eslint-disable react/prop-types */
import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')
  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const inputClean = inputValue.trim()
    if (inputClean.length <= 1) return
    onNewCategory(inputClean.trim())
    setInputValue('')
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
