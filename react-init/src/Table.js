import React, {Component} from 'react'

const Table = (props) => { //this is a custome class component
    const {characterData, removeCharacter} =  props

    return(
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
        </table>
    )
}

const TableHeader = ()  => { //this is a simple component
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => { //this is a simple component
    const rows = props.characterData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

export default Table 