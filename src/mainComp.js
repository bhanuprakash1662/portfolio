import { Component } from "react";
import "./main.css"
import  Mobile from "./assests/mobile.jpg"
import  Laptop from "./assests/laptop.jpg"
import  Watch from "./assests/watch.jpg"


const obj=[{
    productName:"mobile",
    productPrice:"55000",
    productImg:Mobile,
    productAvailabiltity:false
},
{
    productName:"laptop",
    productPrice:"55000",
    productImg:Laptop,
    productAvailabiltity:true
},
{
    productName:"watch",
    productPrice:"55000",
    productImg:Watch,
    productAvailabiltity:false
}]
// const styles={
//     c1:{color:"red"},
//     c2:{color:"green"}
// }

class Main extends Component{
   
    render(){
        return(
            <>
            <div className="mainbox">
                <div className={obj[0].productAvailabiltity?"c1":"c2"}>
                <h1>{obj[0].productName}</h1>
                <img src={obj[0].productImg} alt="mobile"/>
                <h1>{obj[0].productPrice}</h1>
                </div>
                <div className={obj[1].productAvailabiltity?"c1":"c2"}>
                <h1>{obj[1].productName}</h1>
                <img src={obj[1].productImg} alt="laptop"/>
                <h1>{obj[1].productPrice}</h1>
                </div>
                <div className={obj[2].productAvailabiltity?"c1":"c2"}>
                <h1>{obj[2].productName}</h1>
                <img src={obj[2].productImg} alt="watch"/>
                <h1>{obj[2].productPrice}</h1>
                </div>
            </div>
            </>
        )
    }
}
export default Main;