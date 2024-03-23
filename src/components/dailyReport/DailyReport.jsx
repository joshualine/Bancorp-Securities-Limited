import { Link } from 'react-router-dom'
import ListButton from "../listButton/ListButton"


const DailyReport = () => {
  return (
    <>
      <div className=" row mb-5 p-5 card_container d-flex">
        <ListButton title={"Daily PriceList"}>
          <Link to="/daily_pricelists" className="btn btn-primary">View</Link>
        </ListButton>
        <ListButton title={"Daily Market Summary"}>
          <Link to="/daily_market_summary" className="btn btn-primary">View</Link>
        </ListButton>
      </div>
    </>
  )
}

export default DailyReport