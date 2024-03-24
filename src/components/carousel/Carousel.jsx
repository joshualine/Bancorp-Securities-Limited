import civic from '../../images/top-view.jpg'
import './carousel.css'

const Carousel = () => {
  return (
    <>

      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={civic} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>

      <div className='fixer'>
        <iframe height="20" src="https://dataex.nasdotcng.com/market_snapshot2/price_ticker"
          title="NASD Price Ticker" width="100%"></iframe>

      </div>
    </>
  )
}

export default Carousel