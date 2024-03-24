import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Card from "../card/Card"
import { useEffect, useState } from "react";
import Spinner from "../Spinner";


const Deals = () => {


  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const res = await fetch('/api/stockMarket');
        const data = await res.json();
        const dataShort = data.pop()
        setDeals(dataShort);

      } catch (error) {
        console.log("Error fetching data", error)
      } finally {
        setLoading(false)
      }
    }
    fetchDeals();

  }, []);

  let badgeStyle2 = {
    color: "green", backgroundColor: "#b9f8d5"
  }
  let badgeStyle3 = {
    color: "red", backgroundColor: "#fa999944"
  }

  const arrowCheck = deals.dealsPercent;

  let arrowColor = {}
  let arrowShape = true
  if (arrowCheck <= 0) {
    arrowColor = badgeStyle3
  } else {
    arrowColor = badgeStyle2
    arrowShape = false
  }

  return (
    <>
      {loading ? (<Spinner />) : (<>
        <Card key={deals.id} title={"Deals (N)"} amount={deals.dealsAmount} percentage={deals.dealsPercent} badgeStyle={arrowColor} ytdFigure={deals.dealsYtd}>
          { arrowShape ? (<FaArrowDown className="inline mb-1" />) : (<FaArrowUp className="inline mb-1" />)}
        </Card>
      </>)}
    </>
  )
}

export default Deals