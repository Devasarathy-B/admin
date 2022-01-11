import "./feauturedinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeauturedInfo() {
  return (
    <div className="feautured">
      <div className="feauturedItem">
        <span className="feauturedTitle">Revanue</span>
        <div className="feauturedMoneyContainer">
          <span className="feauturedMoney">$2,415</span>
          <span className="feauturedMoneyRate">
            -11.4 <ArrowDownward  className="feauturedIcon negative"/>
          </span>
        </div>
        <span className="feauturedSub">Compared to last month</span>
      </div>
      <div className="feauturedItem">
        <span className="feauturedTitle">Sales</span>
        <div className="feauturedMoneyContainer">
          <span className="feauturedMoney">$4,415</span>
          <span className="feauturedMoneyRate">
            -1.4 <ArrowDownward className="feauturedIcon negative"/>
          </span>
        </div>
        <span className="feauturedSub">Compared to last month</span>
      </div>
      <div className="feauturedItem">
        <span className="feauturedTitle">Cost</span>
        <div className="feauturedMoneyContainer">
          <span className="feauturedMoney">$2,225</span>
          <span className="feauturedMoneyRate">
            +2.4 <ArrowUpward className="feauturedIcon"/>
          </span>
        </div>
        <span className="feauturedSub">Compared to last month</span>
      </div>
    </div>
  );
}