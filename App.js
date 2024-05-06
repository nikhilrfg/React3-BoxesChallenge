import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App(props) {
    const[squares, setSquares] = React.useState(boxes)
    
    // const styles = {
    //     backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    
    // }
    // const squareElements = squares.map(square => (
    //     <div style={styles} className="box" key={square.id}></div>
    // ))

    function toggle(id) {
        // setSquares(prevSquares => {
        //     const newSquares = []
        //     for(let i = 0; i < prevSquares.length; i++){
        //         const currentSquare = prevSquares[i]
        //         if(currentSquare.id === id) {
        //             const updatedSquare = {
        //                 ...currentSquare,
        //                 on: !currentSquare.on
        //             }
        //             newSquares.push(updatedSquare)
        //         } else {
        //             newSquares.push(currentSquare)
        //         }
        //     }
        //     return newSquares
        // })
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on}: square
            })
        })
    }

    const squareElements = squares.map(square => (
     <Box 
        key={square.id} 
        // id={square.id}
        on={square.on} 
        // toggle={toggle}
        toggle = {() => toggle(square.id)}
        />
    ))
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    return (
        <main>
            {/* <h1>Boxes will go here</h1> */}
            {squareElements}
        </main>
    )
}
