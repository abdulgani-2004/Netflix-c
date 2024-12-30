import "./listitem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { useState } from "react";

function Listitem({ index }) {
  const [ishover, setIsHover] = useState(false);


  return (
    <div
      className="listitem"
      style={{
        left: ishover ? (index * 225 - 50 + index * 2.5) : 0,
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="" />
      {ishover ? (
        <>
          <video src="https://www.istockphoto.com/video/asian-computer-engineer-using-program-for-system-control-gm1586899577-529119810"autoPlay loop />
          <div className="iteminfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOffAltOutlinedIcon className="icon" />
            </div>
            <div className="iteminfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis repellat in voluptate aliquid deleniti molestiae.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Listitem;
