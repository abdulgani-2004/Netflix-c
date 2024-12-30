import "./list.scss"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from "../listitem/Listitem";
import { useRef, useState } from "react";
function List() {
  const[sliderNumber,setSliderNumber]=useState(0)
  const[ismoved,setIsMoved]=useState(false)
    const listRef =useRef()
    const handleClick =(direction) =>{
      setIsMoved(true)
      let distance = listRef.current.getBoundingClientRect().x -50
        if(direction === "left" && sliderNumber >0){
          setSliderNumber(sliderNumber -1) 
         listRef.current.style.transform = `translateX(${230+ distance}px)`
        }
        if(direction === "right" && sliderNumber <5){
          setSliderNumber(sliderNumber +1)
          listRef.current.style.transform = `translateX(${-230+ distance}px)`
         }
        console.log(distance)

    }
  return (
    <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
        <ArrowBackIosOutlinedIcon className="sliderarrow left" onClick={()=>handleClick("left")}
          style={{display: !ismoved && "none"}}/>
        <div className="container" ref={listRef}> 
<ListItem index={0}/>
<ListItem index={1}/>
<ListItem index={2}/>
<ListItem index={3}/>
<ListItem index={4}/>
<ListItem index={5}/>
<ListItem index={6}/>
<ListItem index={7}/>
<ListItem index={8}/>
<ListItem index={9}/>
<ListItem index={10}/>

        </div>
        <ArrowForwardIosOutlinedIcon className="sliderarrow right" onClick={()=>handleClick("right")}/>
        </div>

      
    </div>
  )
}

export default List
