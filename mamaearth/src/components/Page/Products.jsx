import { Card } from "./Card";
import "./Products.css";
import { Link } from "react-router-dom";
import { FilterButtons } from "./FilterButtons";
import axios from "axios";
import { useEffect, useState } from "react";

export const Products = (props) => {
  const [show, setShow] = useState(true);
  const [baby, setBaby] = useState([]);
  const [filter, setFilter] = useState("");
  console.log("baby:", baby);
  let CartArr = JSON.parse(localStorage.getItem("cartArr")) || [];
  useEffect(() => {
    getData();
  }, []);

  const filterData = (str) => {
    setFilter(str);
  };

  const getData = () => {
    axios.get(props.url).then((res) => setBaby(res.data));
  };

  const handleSort = (value) => {
    if (value === "high") {
      setBaby(
        [...baby].sort((a, b) => {
          return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
        })
      );
    } else {
      setBaby(
        [...baby].sort((a, b) => {
          return a.price > b.price ? 1 : a.price < b.price ? -1 : 0;
        })
      );
    }
  };
  const addToCart = (data) => {
    console.log("data:", data);
    CartArr.push(data);
    localStorage.setItem("cartArr", JSON.stringify(CartArr));
  };
  return (
    <>
      <img
        src={props.poster}
        alt=""
        // style={{ marginTop: "130px" }}
        width="1349px"
        height="400px"
      />
      <div className="title-sort">
        <div className="title">Our Products</div>
        {show ? (
          <div
            className="sort"
            onClick={() => {
              setShow(!show);
            }}
          >
            SortBy
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAB8klEQVRYhe3XvUsbYRwH8O/v7jzj2+BVxIZKSBonCx0sBcHBaiHSgijFODgUBRGRdu3q6h9QqFCQIoLGIYN0UtShUyFYKJkaFcEGQUl8y8sll/s5NBeCySWpXLb7js8993w/PHfD8xDqkL7laDNxIgjgzK14Zzb9lDObS3Uq/w5gAAAY2PAo3vdmCEsBfcvRZoETW8xQQThn4C8BQwyctJ2dTu0vvtLuvyPUo/wyi3GA0wCumAQfAa6bridrg4t7Ul0A98sjH3tU41lo7mlFRFXARIDFwZVjx0PKa0FUBRzF/ywk0rkls+einvTpwEXqUWasXHkxQmuURgSg47qz+7kxXvJNSsLUxKSb7sDPeW8QQLDqOgB+TbsvAQwXj1n2Ez40NsAG2AAbYANsgA2wAYUT0csvhy8Y+lK2UXqXP7mYpjcQlh0xeVVkWs+fiEpCLKRZ0FPVAIUdcCmeAwZOJVXb7f8aViqVN8XkgAB6nNDVbbN5LQ7xk6e953PNgE0/5dyKdwbA76wm75RDGOUEUpI59U14offWbOH9aXe60pXMSMnNaCLA4nE8sgLGswYp8zqjybME9qSU7Iday/8nZa9mxQgQbTOjk8DtVpebAgzEUSzyjYDJ/NAPppa3oTln0qryigAD8W8n2MnUOmp1OQDcAazm7SafPRA1AAAAAElFTkSuQmCC"
              height="20px"
              alt=""
            ></img>
          </div>
        ) : (
          <select onChange={(e) => handleSort(e.target.value)}>
            <option value="high">High-Low</option>
            <option value="low">Low-High</option>
          </select>
        )}
      </div>
      <FilterButtons filter={filterData} />
      <div className="container">
        {baby
          .filter((data) => {
            if (data.category === undefined) {
              return null;
            } else {
              return data.category.includes(filter);
            }
          })
          .map((e) => {
            return (
              <Link to={`/face/${e.id}`}>
                <Card
                  key={e.id}
                  desc={e.desc}
                  price={e.price}
                  image={e.img}
                  data={e}
                  cart={addToCart}
                ></Card>
              </Link>
            );
          })}
      </div>
    </>
  );
};
