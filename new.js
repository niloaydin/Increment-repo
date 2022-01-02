const p = document.createElement('p')
p.innerText = 

document.body.appendChild(p)

const countDisplay = document.createElement('h2')
countDisplay.className = 'display'
countDisplay.innerText = count

document.body.appendChild(countDisplay)

const countDisplay2 = document.createElement('h2')
countDisplay2.className = 'display'
countDisplay2.innerText = count

document.body.appendChild(countDisplay2)

const incrementButton = document.createElement('button')
incrementButton.id = 'increment'
incrementButton.innerText= 'Increment'

document.body.appendChild(incrementButton)