var root = document.querySelector("#root")
var h1 = document.createElement('h1')

h1.innerHTML = "Hello World"

root.appendChild(h1)




var h1 = React.createElement('h1', null, "Hello React")
var parent = document.querySelector("#parent")
var root = ReactDOM.createRoot(parent)
root.render(h1)








/* npm create vite
react
react
react
javascript
cd react
npm i
npm run dev
*/











import React from 'react'

const App = () => {
  const user = "Ankit"
  return (
    <div>
      <h1>Hello 🖤{user}</h1>
    </div>
  )
}

export default App