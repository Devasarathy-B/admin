import React from 'react'
import "./Topbar.css"
import img from './images/deva.jpg';
import { NotificationsNone,Language,Settings } from '@material-ui/icons';



 function Topbar() {
    return (
        <>
    <div className="topbar">
    <div className="topbarWrapper">
        <div className="topleft">
            <span className="logo">BDS ADMIN PORTAL</span>
        </div>
        <div className="topright">
            <div className="topbarIconContainer">
                    <NotificationsNone />
            
            <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                    <Language />
            
            <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
                    <Settings />
            </div>
           <img src={img} alt="" className="topAvatar" />
        </div>
    </div>
    </div>
    </>
    );
    
}
export default Topbar;
