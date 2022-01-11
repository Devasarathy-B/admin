import "./widgetsm.css";
import { Visibility }  from "@material-ui/icons";

export default function WidgetSm() {
    return (
        <div className="widgetSm">

            <span className="widgetSmTitle">New Joining Members</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItems">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Anna Keller</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSamllIcons"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItems">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Anna Keller</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSamllIcons"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItems">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Anna Keller</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSamllIcons"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItems">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Anna Keller</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSamllIcons"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItems">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Anna Keller</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSamllIcons"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
