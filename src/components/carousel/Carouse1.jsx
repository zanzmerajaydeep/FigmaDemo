import caroUselImage1 from "../../assets/carosuel_images/carousel_image1.png";
import carouselChartImage from "../../assets/carosuel_images/chart-image.png";
import Arrow from "../Arrow";
const Carouse1 = () => {
  return (
    <div className="carousel carousel1 flex">
      <div className="left">
        <div style={{ padding: "0px 19px 0 0" }} className="leftdiv">
          <div className="heading">
            <h1>
              Industry <span>4.0</span> Starts Here<span>.</span>{" "}
            </h1>
          </div>
          <div className="description">
            Empower your factory floor with real-time IoT insights and
            automation.
          </div>
          <button className="btn-purple explore-btn">
            Explore Our Solution <Arrow />
          </button>
        </div>
      </div>
      <div className="right">
        <div className="carosusel-image-with-overlay">
          <div className="carousel1-image">
            <div className="image-overlay"></div>

            <img
              src={caroUselImage1}
              className="carouselimage1"
              alt="carousel-1"
            />

            <div className="image-outer-overlay">
              <div className="d-flex k">
                <div className="chart-image">
                  <img src={carouselChartImage} alt="" />
                </div>

                <div className="chart-image-description">
                  Leading the future of industry
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carouse1;
