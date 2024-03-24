


import MarketCap from '../featuredInfo/MarketCap'
import ShareIndex from '../featuredInfo/ShareIndex'
import Value from '../featuredInfo/Value'
import Volume from '../featuredInfo/Volume'
import Deals from '../featuredInfo/Deals'
import './homeCards.css'
const HomeCards = () => {
  return (
    <>

    <h3 className='px-5 py-0'>Research Portal</h3>
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