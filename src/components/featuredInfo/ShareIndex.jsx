import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Card from "../card/Card"
import { useEffect, useState } from "react";
import Spinner from "../Spinner";



const ShareIndex = () => {

  const [ngx, setNgx] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNgx = async () => {
      try {
        const res = await fetch('/api/stockMarket');
        const data = await res.json();
        const dataShort = data.pop()
        setNgx(dataShort);

      } catch (error) {
        console.log("Error fetching data", error)
      } finally {
        setLoading(false)
      }
    }
    fetchNgx();

  }, []);

  let badgeStyle2 = {
    color: "green", backgroundColor: "#b9f8d5"
  }
  let badgeStyle3 = {
    color: "red", backgroundColor: "#fa999944"
  }

  const arrowCheck = ngx.ngxPercent;

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
        <Card key={ngx.id} title={"NGX All-Share Index"} amount={ngx.ngxAmount} percentage={ngx.ngxPercent} badgeStyle={arrowColor} ytdFigure={ngx.ngxYtd}>
          { arrowShape ? (<FaArrowDown className="inline mb-1" />) : (<FaArrowUp className="inline mb-1" />)}
        </Card>
      </>)}
    </>
  )
}

export default ShareIndex