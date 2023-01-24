import React, {Component} from 'react'
import Table from './Table.js'
import Form from './Form.js'

class App extends Component { //we load the Component as a property of React, this is the script part in index.html

    state = {
        characters: [],
    }

    removeCharacter = (index) => { //method for removing characters from the list given the index
        const {characters} = this.state

        this.setState({ //'filter' cretes a new array, used to modify arrays in JS
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }
    
    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] });
    }

    render(){
        const {characters} = this.state

        return (
            <div className="container">
                <Table characterData = {characters} removeCharacter = {this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }

}

export default App
