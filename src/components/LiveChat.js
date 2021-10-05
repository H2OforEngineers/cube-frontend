import React from "react";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import './LiveChat.css';


export default function LiveChat (){
    const  openRequestedPopup = () => {
        window.open(
          "https://cube-engineer.herokuapp.com/",
          "_blank",
          "resizable,scrollbars,status"
        );
      }
    return(
        <div >
          <button className='askbtn' >
            <ContactSupportIcon /><a href='#test' id='test' onClick={()=>openRequestedPopup()}>Ask For Help !</a>
        </button>

        </div>
    )
}