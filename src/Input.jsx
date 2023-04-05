import React from 'react'
import colorNames from 'colornames';

const Input = ({color, setColor, setHexValue, isDarkText, setIsDarkText}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name:</label>
      <input 
          type='text'
          autoFocus
          placeholder='Type a color'
          required
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
            setHexValue(colorNames(e.target.value));
          }}
          data-testid="input"
      />
      <button 
        className='toggle'
        onClick={() => setIsDarkText(!isDarkText)}
        data-testid="button"
      >
        Toggle text color
      </button>
    </form>
  )
}

export default Input;