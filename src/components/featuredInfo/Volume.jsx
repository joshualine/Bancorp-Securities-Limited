import Card from "../card/Card"
import { FaArrowUp } from "react-icons/fa";

const Volume = () => {


  const badgeStyle2 = {
    color: "green", backgroundColor: "#b9f8d5"
  }

  return (
    <Card title={"Volume (N)"} amount={"287,445,691.00"} percentage={"32.34"} badgeStyle={badgeStyle2} ytdFigure={"N/A"}>
      <FaArrowUp className="inline mb-1" />
    </Card>
  )
}

export default Volume