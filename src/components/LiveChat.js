import React from "react";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Button from '@mui/material/Button';
import './LiveChat.css'


export default function LiveChat (){
    const  openRequestedPopup = () => {
        window.open(
          "https://cube-engineer.herokuapp.com/",
          "_blank",
          "resizable,scrollbars,status"
        );
      }
    
    return(
        <>
          <Button className='askbtn'>
            <ContactSupportIcon /><a onClick={()=>openRequestedPopup()}>Ask For Help !</a>
        </Button>

        </>
    )
}