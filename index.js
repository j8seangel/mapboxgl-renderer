import { render } from './lib'
import fs from 'fs'
// import { style } from './styles/amathea.style'
import { style } from './styles/carrier.style'

render(style, { center: [-75, 9], zoom: 2 }).then((data) => {
  fs.writeFileSync('test.png', data)
  console.log('Done!')
  console.log('\n')
})