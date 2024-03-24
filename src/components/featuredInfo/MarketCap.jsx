import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Card from "../card/Card"
import { useEffect, useState } from "react";
import Spinner from "../Spinner";


const MarketCap = () => {

  const [marketCaps, setmarketCaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchmarketCaps = async () => {
      try {
        const res = await fetch('/api/stockMarket');
        const data = await res.json();
        const dataShort = data.pop()
        setmarketCaps(dataShort);

      } catch (error) {
        console.log("Error fetching data", error)
      } finally {
        setLoading(false)
      }
    }
    fetchmarketCaps();

  }, []);

  let badgeStyle2 = {
    color: "green", backgroundColor: "#b9f8d5"
  }
  let badgeStyle3 = {
    color: "red", backgroundColor: "#fa999944"
  }

  const arrowCheck = marketCaps.marketCapPercent;

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
        <Card key={marketCaps.id} title={"Market Capitalization (N)"} amount={marketCaps.marketCapAmount} percentage={marketCaps.marketCapPercent} badgeStyle={arrowColor} ytdFigure={marketCaps.marketCapYtd}>
          {arrowShape ? (<FaArrowDown className="inline mb-1" />) : (<FaArrowUp className="inline mb-1" />)}
        </Card>
      </>)}
    </>
  )
}

export default MarketCap