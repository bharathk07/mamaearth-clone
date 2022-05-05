import { Card } from "./card";
import "./baby_products.css";
// import { Link } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react";

export const BabyProducts = () => {
    const [show,setShow]=useState(true)
  const [baby, setBaby] = useState([]);
  useEffect(() => {
    axios
      .get("https://mama-earth.herokuapp.com/baby_page")
      .then((res) => setBaby(res.data));
  }, []);
  return (
    <>
    <img src="https://images.ctfassets.net/66mrrren2unf/1LH7b5JOWtuTiarFdJ2QNA/07434c4bf1d6e104ada7e8c7f13f57d3/desktop-bathing-.jpg?q=40" alt="" width="1349px" height="400px" />
     <div className="title-sort">
        <div className="title">Our Products</div>
        {show ? <div className="sort" onClick={()=>{setShow(!show)}}>SortBy<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAB8klEQVRYhe3XvUsbYRwH8O/v7jzj2+BVxIZKSBonCx0sBcHBaiHSgijFODgUBRGRdu3q6h9QqFCQIoLGIYN0UtShUyFYKJkaFcEGQUl8y8sll/s5NBeCySWpXLb7js8993w/PHfD8xDqkL7laDNxIgjgzK14Zzb9lDObS3Uq/w5gAAAY2PAo3vdmCEsBfcvRZoETW8xQQThn4C8BQwyctJ2dTu0vvtLuvyPUo/wyi3GA0wCumAQfAa6bridrg4t7Ul0A98sjH3tU41lo7mlFRFXARIDFwZVjx0PKa0FUBRzF/ywk0rkls+einvTpwEXqUWasXHkxQmuURgSg47qz+7kxXvJNSsLUxKSb7sDPeW8QQLDqOgB+TbsvAQwXj1n2Ez40NsAG2AAbYANsgA2wAYUT0csvhy8Y+lK2UXqXP7mYpjcQlh0xeVVkWs+fiEpCLKRZ0FPVAIUdcCmeAwZOJVXb7f8aViqVN8XkgAB6nNDVbbN5LQ7xk6e953PNgE0/5dyKdwbA76wm75RDGOUEUpI59U14offWbOH9aXe60pXMSMnNaCLA4nE8sgLGswYp8zqjybME9qSU7Iday/8nZa9mxQgQbTOjk8DtVpebAgzEUSzyjYDJ/NAPppa3oTln0qryigAD8W8n2MnUOmp1OQDcAazm7SafPRA1AAAAAElFTkSuQmCC" height="20px" alt=""></img></div> :
        <select>
            <option value="rate">Rating</option>
            <option value="high">High-Low</option>
            <option value="low">Low-High</option>
        </select>}
        
        
     </div>
      <div className="container">
        {baby.map((e) => {
          return (
            <Card
              key={e.id}
              desc={e.desc}
              price={e.price}
              image={e.img}
              category={e.category}
            ></Card>
          );
        })}
      </div>
    </>
  );
};
