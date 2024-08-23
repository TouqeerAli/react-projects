import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

// const reactElement = {
//   type : 'a',
//   props : {
//       href:"https://google.com",
//       target: "_blank"
//   },
//   Children: "Click to visit Google"
// }



// function MyApp() {
 
//   return (
//     <div>
//   <h1>heloooooo from MyApp</h1>
  
//     </div>
  
//   )
// }



// const anotherElement = (
//   <a href='https://google.com' target='_blank'>visit Google</a>
// )


const username = 'chai aur react'

const reactElement =  React.createElement(
 'a',
 {
  href:"https://google.com",
      target: "_blank"
 },
 'Click to visit Google',
 username
)

createRoot(document.getElementById('root')).render(
 
   reactElement
 
)
