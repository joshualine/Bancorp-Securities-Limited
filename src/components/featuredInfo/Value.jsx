import Card from "../card/Card"
import { FaArrowDown } from "react-icons/fa";

const Value = () => {
  const badgeStyle2 = {
    color: "red", backgroundColor: "#fa999944"
  }


  return (
    <Card title={"Value (N)"} amount={"7,593,505,292.76"} percentage={"-0.40"} badgeStyle={badgeStyle2} ytdFigure={"N/A"}>
      <FaArrowDown className="inline mb-1" />
    </Card>
  )
}

export default Value