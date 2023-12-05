import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import {  subcategory } from "./CategoryofElement";
import "./minicompont.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export function FiltetDropDwon(props) {
  const [getvalu, setGetvalu] = useState(null);
  function onhandelchange(e, newvalu) {
    setGetvalu(newvalu);
    props.getvalu(newvalu);
  }
  return (
    <div>
      <Autocomplete
        freeSolo
        sx={{
          backgroundColor: "transparent",
          border: "solide 1px #000",
          borderRadius: "5px",
          textTransform: "capitalize",
        }}
        value={getvalu}
        onChange={onhandelchange}
        options={subcategory}
        getOptionLabel={(op) => op}
        renderInput={(pre) => (
          <TextField {...pre} label="Filter" sx={{ color: "#000" }} />
        )}
      />
    </div>
  );
}

export function Slider({item}) {
  const [current, setCurrent] = useState(0);
  
  const nextbutton = () => {
    setCurrent((prev) => (prev === item.length - 1 ? 0 : prev + 1));
  };
  const prevbutton = () => {
    setCurrent((prev) => (prev === 0 ? item.length - 1 : prev - 1));
  };
  useEffect(()=>{
    const intervel = setInterval(()=>(
      nextbutton()
    ),3000)
    return () => clearInterval(intervel)
  },[current])
  return (
    <div className="carousel">
      <button onClick={prevbutton} type="button" className="leftbutton">
        <FontAwesomeIcon icon={faChevronLeft}  />
      </button>
      <div className="carouse_content">
        {item.map((e) => (
          <div
            key={e.id}
            className={e.id === current ? "slide active" : "slide"}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            <img src={e.name} alt="" />
          </div>
        ))}
      </div>
      <button onClick={nextbutton} type="button" className="rightbutton">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}
