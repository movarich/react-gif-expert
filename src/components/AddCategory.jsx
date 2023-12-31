import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return
        setInputValue('')
        onNewCategory(inputValue)
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type='text'
                placeholder='Gifs'
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
