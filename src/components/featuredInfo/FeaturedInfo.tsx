import "./featuredInfo.css";
import { FcCheckmark } from "react-icons/fc";
import { ImCancelCircle } from 'react-icons/im';
import { RiFileEditLine } from 'react-icons/ri';

interface FeaturedInfoProps {
  // You can define props here if needed
}

const FeaturedInfo: React.FC<FeaturedInfoProps> = () => {
  return (
    <div className='featured'>
      <div className="over">
        <h3>Overview</h3>
         <div className="today">
         <h3>Today</h3>
         </div>
      </div>
      <div className="card2">
        <div className="featuredItem rev">
          <span className="featuredTitle">
            Revenue Generated
          </span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">
              7,625
            </span>
          </div>
          
        </div>

        <div className="featuredItem total">
          <span className="featuredTitle">
            Total Agent
          </span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">
            3,671
            </span>
          </div>
        </div>

        <div className="featuredItem payout">
          <span className="featuredTitle">
            Pending Payout
          </span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">
              156
            </span>
          </div>
        </div>

        <div className="featuredItem product">
          <span className="featuredTitle">
            Product Delivered
          </span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">
              2,318
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
