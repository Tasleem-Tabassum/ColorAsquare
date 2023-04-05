import React from 'react';
import Square from './Square';
import Input from './Input'

function App() {
  const [color, setColor] = React.useState('')
  const [hexValue, setHexValue] = React.useState('')
  const [isDarkText, setIsDarkText] = React.useState(true)

  return (
    <div className="App">
      <Square 
        color={color} 
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input 
        color={color} 
        setColor={setColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
