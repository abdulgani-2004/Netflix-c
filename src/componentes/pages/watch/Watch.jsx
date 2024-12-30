import React from 'react';
import './watch.scss';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

function Watch() {
  return (
    <div className='watch'>
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video className='video' 
             src='https://media.istockphoto.com/id/469853045/video/winter-driving.mp4?s=mp4-640x640-is&k=20&c=KrKHyXmVwwBlfR-7tM_4u4HB4kwJY2941GQ7QDvDgoE='  
             autoPlay 
             muted        
             controls>
      </video>
    </div>
  );
}

export default Watch;
