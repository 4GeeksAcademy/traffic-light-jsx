import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
const Home = () => {
const [ red , setRed ] = useState("red")
const [ yellow , setYellow ] = useState("yellow")
const [ green , setGreen ] = useState("green")
	const addGlow = (color) => {
		setRed("red");
		setYellow("yellow");
		setGreen("green");
		
		switch (color) {
			case "red":
				  setRed("red glow");
				 
			break;
			case "yellow" :
				  setYellow("yellow glow");
				 
			break;
			case "green" :
				  setGreen("green glow");
				 
			break;
		}
	}
	return (
		<div className="container" style={{justifyContent: 'center'}}>
			<div className="trafficTop mx-auto" style={{width: '20px', height: '128px', backgroundColor: 'black'}}>#</div>
			<div className="trafficBottom mx-auto border rounded p-2" style={{width: '100px', height: '250px', backgroundColor: 'black'}}>
				<div className={red} onClick={() => addGlow('red')}></div>
				<div className={yellow} onClick={() => addGlow('yellow')}></div>
				<div className={green} onClick={() => addGlow('green')}></div>
			</div>
		</div>
	);
};
export default Home;
