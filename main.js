class App{
    count = 0
    constructor() {
        this.renderApp()
        this.bindEvents()
        }
    
    template = `
    <h1>Hello World</h1>
    <p>'Welcome to our mighty counter! You can only count up since we are unique stars <3'</p>
    <h2>The count is: <span class ="display"> ${this.count} </span></h2>
    <h2>The count is: <span class ="display"> ${this.count} </span></h2>
    <button id="increment">Increment</button>
    `
    renderApp(){
    document.querySelector('#app').innerHTML = this.template
    }
    
    
    bindEvents(){
    document.querySelector('#increment').addEventListener('click',() => this.handleIncrementClick())
    }
     
    incrementCount(){
        this.count++  
    }
    
    updateDisplays(){
        document.querySelectorAll('.display').forEach(display => {
            display.innerText = this.count
        })
    }
    
    handleIncrementClick(){
        this.incrementCount()
        this.updateDisplays()
    }
    }
    
    new App()