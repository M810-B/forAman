import React from 'react'
import "./announcementbar.css"
import {AiOutlineArrowRight} from "react-icons/ai"

function announcementbar() {
  return (
    <div className="announcementBarContainer">
        <div className="text">Welcome to GuzelGiy. Login now to get exclusive offers and discounts on shopping for your favourite influencers.</div>
        <div className="icon"><AiOutlineArrowRight size={20}/></div>
        
    </div>
  )
}

export default announcementbar