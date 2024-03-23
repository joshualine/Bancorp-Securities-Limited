import Card from "../card/Card"
import { FaArrowDown } from "react-icons/fa";

const ngx = [{
  "id": 1,
  "ngxAmount": "104,663.3",
  "ngxPercent": "-0.40",
  "ngxYtd": "34.62"
},
{
  "id": 2,
  "ngxAmount": "104",
  "ngxPercent": "-0.40",
  "ngxYtd": "34.62"
},
{
  "id": 3,
  "ngxAmount": "104,663.34",
  "ngxPercent": "-0.40",
  "ngxYtd": "34.62"
}
]
let len = ngx.pop()



const ShareIndex = () => {


  const badgeStyle2 = {
    color: "red", backgroundColor: "#fa999944"
  }


  return (
    <Card title={"NGX All-Share Index"} amount={len.ngxAmount} percentage={"-0.40"} badgeStyle={badgeStyle2} ytdFigure={39.46}>
      <FaArrowDown className="inline mb-1" />
    </Card>
  )
}

export default ShareIndex