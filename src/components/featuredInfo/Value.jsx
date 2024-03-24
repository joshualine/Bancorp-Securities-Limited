import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Card from "../card/Card"
import { useEffect, useState } from "react";
import Spinner from "../Spinner";

const Value = () => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchValue = async () => {
      try {
        const res = await fetch('/api/stockMarket');
        const data = await res.json();
        const dataShort = data.pop()
        setValue(dataShort);

      } catch (error) {
        console.log("Error fetching data", error)
      } finally {
        setLoading(false)
      }
    }
    fetchValue();

  }, []);

  let badgeStyle2 = {
    color: "green", backgroundColor: "#b9f8d5"
  }
  let badgeStyle3 = {
    color: "red", backgroundColor: "#fa999944"
  }

  const arrowCheck = value.valuePercent;

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
        <Card key={value.id} title={"Value (N)"} amount={value.valueAmount} percentage={value.valuePercent} badgeStyle={arrowColor} ytdFigure={value.valueYtd}>
          {arrowShape ? (<FaArrowDown className="inline mb-1" />) : (<FaArrowUp className="inline mb-1" />)}
        </Card>
      </>)}
    </>
  )
}

export default Value