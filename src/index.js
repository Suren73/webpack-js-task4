import '../styles/index.css'
import JS_IMAGE from '../assets/JavaScript_Logo.png'

console.log('Hello World!')

const titleHTML = document.createElement('h1')
titleHTML.textContent = 'I love JavaScript'
const imgHTML = document.createElement('img')
imgHTML.src = JS_IMAGE
document.body.append(titleHTML, imgHTML)
