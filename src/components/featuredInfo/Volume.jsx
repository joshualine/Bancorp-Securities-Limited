import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Card from "../card/Card"
import { useEffect, useState } from "react";
import Spinner from "../Spinner";

const Volume = () => {


  const [volume, setVolume] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVolume = async () => {
      try {
        const res = await fetch('/api/stockMarket');
        const data = await res.json();
        const dataShort = data.pop()
        setVolume(dataShort);

      } catch (error) {
        console.log("Error fetching data", error)
      } finally {
        setLoading(false)
      }
    }
    fetchVolume();

  }, []);

  let badgeStyle2 = {
    color: "green", backgroundColor: "#b9f8d5"
  }
  let badgeStyle3 = {
    color: "red", backgroundColor: "#fa999944"
  }

  const arrowCheck = volume.volumePercent;

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
        <Card key={volume.id} title={"Volume (N)"} amount={volume.volumeAmount} percentage={volume.volumePercent} badgeStyle={arrowColor} ytdFigure={volume.volumeYtd}>
          {arrowShape ? (<FaArrowDown className="inline mb-1" />) : (<FaArrowUp className="inline mb-1" />)}
        </Card>
      </>)}
    </>
  )
}

export default Volume