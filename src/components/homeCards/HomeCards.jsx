


import MarketCap from '../featuredInfo/MarketCap'
import ShareIndex from '../featuredInfo/ShareIndex'
import Value from '../featuredInfo/Value'
import Volume from '../featuredInfo/Volume'
import Deals from '../featuredInfo/Deals'
import './homeCards.css'
const HomeCards = () => {
  return (
    <>
      <div className="card_container">

          <ShareIndex />
          <MarketCap />
          <Volume />
          <Value />
          <Deals />

      </div>
    </>
  )
}

export default HomeCards