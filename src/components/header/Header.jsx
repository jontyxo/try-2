import "./header.css";

export default function Header() {
  return (
    <>

    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Xenon Car Service</span>
        <span className="headerTitleLg">Just like home</span>
      </div>
      <img
        className="headerImg"
        src="https://res.cloudinary.com/jonty-mern/image/upload/v1668007944/xenon/make-money-with-your-car_b0b3hl.jpg"
        alt=""
      />
    </div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src="https://res.cloudinary.com/jonty-mern/image/upload/v1668028934/xenon/picture-showing-muscular-car-service-worker-repairing-vehicle-picture-showing-muscular-car-service-worker-repairing-vehicle-115328718_lxzxub.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://res.cloudinary.com/jonty-mern/image/upload/v1668029004/xenon/istockphoto-1165665234-612x612_ebkh6b.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://res.cloudinary.com/jonty-mern/image/upload/v1668029054/xenon/videoblocks-auto-service-woman-gives-the-keys-of-car-for-mechanic_rwnnr6mlb_thumbnail-full01_o8muwb.png" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

  <div className="footer-header">Come and Join us :)</div>

</div>


    </>
  );
}
