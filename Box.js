import React from "react"

export default function Box(props) {
    console.log(props.id)
    // const [on, setOn] = React.useState(props.on)

    const styles = {
        backgroundColor: on? "#222222" : "transparent"
    }

    // function toggle() {
    //     setOn(prevOn => !prevOn)
    // }
    return (
        <button 
            style={styles} 
            className="box"
            // onClick={()=>props.toggle(props.id)}
            onClick={props.toggle}
        >
        </button>
    )
}