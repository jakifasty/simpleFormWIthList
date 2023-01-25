import React, { Component } from 'react'

class App extends Component { //this class is used to pull data from the API
    
    state = {
        data: [],
    }

    //after component is insterted into the DOM tree, the code is invoked
    componentDidMount(){ 
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

        fetch(url) //we fetch the url
            .then((result) => result.json()) //then, convert the result into JSON format
            .then((result) => {
                this.setState({ //then, we set the state given the state data and the fetched result
                    data: result, 
                })
            })
    }

    render(){
        const {data} = this.state

        const result = data.map((entry, index) => { //mapping of the data given the index key
            return <li key={index}>{entry}</li> //return listing entry given the index
        })

        return <ul>{result}</ul> //return the result url 
    }
}

export default App


