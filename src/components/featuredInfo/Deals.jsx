import Card from "../card/Card"
import { FaArrowDown } from "react-icons/fa";


const Deals = () => {
  const badgeStyle2 = {
    color: "red", backgroundColor: "#fa999944"
  }


  return (
    <Card title={"Deals"} amount={"9,548"} percentage={"-0.40"} badgeStyle={badgeStyle2} ytdFigure={"N/A"}>
      <FaArrowDown className="inline mb-1" />
    </Card>
  )
}

export default Deals