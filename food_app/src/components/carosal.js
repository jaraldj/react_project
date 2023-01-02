export default function Carosal(){
    return(
        <div id="carouselExampleControls" className="carousel slide carosalpad" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://thesmmhub.com/NawabiBiryani/img/img/banner.png" className="d-block w-100" height="450px" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5fe3259621a75_json_image_1608721814.webp" className="d-block w-100" height="450px" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5fe3267a0808c_json_image_1608722042.webp" className="d-block w-100" height="450px" alt="..." />
        </div>
      </div>
     <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
    )
}