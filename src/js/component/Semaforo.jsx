import React, {useState} from 'react'

const Semaforo = () => {
    const [color, setColor] = useState("red")
	
	const changeColor = (color) => {
		setColor(color)
	}

	return <>
	<div className='palo'></div>

		<div className="semaforo-caja">
		<div className=
			{`luz red ${color == "red" ? "brillo" : ""}`} 
			onClick={() => changeColor("red")}>
			
		</div>
		<div className=
			{`luz yellow ${color == "yellow" ? "brillo" : ""}`} 
			onClick={() => changeColor("yellow")}>

		</div>
		<div className=
			{`luz green ${color == "green" ? "brillo" : ""}` }
			onClick={() => changeColor("green")}>

		</div>
  	</div>
	</>
}

export default Semaforo