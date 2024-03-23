import "./home.css"

import civic from '../../images/civic-day.jpg'

const Home = () => {
  return (
    <>

      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="">
            <img src={civic} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home