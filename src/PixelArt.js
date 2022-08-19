import { createContext, useContext, useState } from 'react'

const ColorContext = createContext({
  color: 'silver',
  setColor: () => {}
})

function ColorPicker () {
  const { setColor } = useContext(ColorContext)

  const colors = ['red', 'blue', 'yellow']
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => setColor(color)}
        />))}
    </div>
  )
}

function Pixel () {
  const { color } = useContext(ColorContext)
  const [pixelColor, setPixelColor] = useState('silver')

  return <button onClick={() => setPixelColor(color)} style={{ height: '30px', width: '30px', backgroundColor: pixelColor, margin: '1px' }} />
}

function Pixels () {
  const pixels = []
  for (let i = 0; i < 25; i++) pixels.push(<Pixel key={i} />)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', width: '310px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt () {
  const [color, setColor] = useState('silver')

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <ColorPicker />
      <Pixels />
    </ColorContext.Provider>
  )
}
