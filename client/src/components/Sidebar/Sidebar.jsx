import React from 'react'
import "./sidebar.css"
import {LineStyle ,Timeline,TrendingUp,Storefront,Assessment,Mail,Forum,ChatBubble,Work,Report, PermIdentity} from '@material-ui/icons'
import  {Link}  from 'react-router-dom';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        <h3>Dashboard</h3>
                        <ul className="sidebarList">
                            <Link to='/' className='link'>
                            <li className="sidebarListItem active">
                               <LineStyle className='sidebarIcon'/> Home
                            </li>
                            </Link>
                            <li className="sidebarListItem">
                               <Timeline className='sidebarIcon'/> Analytics
                            </li>
                            <li className="sidebarListItem">
                               <TrendingUp className='sidebarIcon'/> Sales
                            </li>


                        </ul>
                    </div>
                    <div className="sidebarTitle">
                        <h3>Quick Menu</h3>
                        <ul className="sidebarList">
                            <Link to='/users' className='link'>
                                <li className="sidebarListItem ">
                               <PermIdentity className='sidebarIcon'/> Users
                            </li>
                            </Link>
                            <Link to='/products' className='link'>
                            <li className="sidebarListItem">
                               <Storefront className='sidebarIcon'/> Products
                            </li>
                            </Link>
                            <li className="sidebarListItem">
                               <TrendingUp className='sidebarIcon'/> Transactions
                            </li>
                            <li className="sidebarListItem">
                               <Assessment className='sidebarIcon'/> Reports
                            </li>


                        </ul>
                    </div>
                    <div className="sidebarTitle">
                        <h3>Notifications</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem ">
                               <Mail className='sidebarIcon'/> Mail
                            </li>
                            <li className="sidebarListItem">
                               <Forum className='sidebarIcon'/> Feedback
                            </li>
                            <li className="sidebarListItem">
                               <ChatBubble className='sidebarIcon'/> Messages
                            </li>


                        </ul>
                    </div>
                    <div className="sidebarTitle">
                        <h3>Staffs</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem ">
                               <Work className='sidebarIcon'/> Manage
                            </li>
                            <li className="sidebarListItem">
                               <Timeline className='sidebarIcon'/> Analytics
                            </li>
                            <li className="sidebarListItem">
                               <Report className='sidebarIcon'/> Reports
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
