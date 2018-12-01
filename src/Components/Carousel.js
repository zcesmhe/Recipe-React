import React from "react";
import Food1 from "./Images/food-1.jpeg";
import Food2 from "./Images/food-2.jpeg";
import Food3 from "./Images/food-3.jpeg";
import Food4 from "./Images/food-4.jpeg";


class Carousel extends React.Component {

    render() {

        return (
            <div className="carousel">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="carousel-img" style={{ backgroundImage: `url(${Food1})` }}></div>
                        </div>
                        <div class="carousel-item">
                            <div className="carousel-img" style={{ backgroundImage: `url(${Food2})` }}></div>
                        </div>
                        <div class="carousel-item">
                            <div className="carousel-img" style={{ backgroundImage: `url(${Food3})` }}></div>
                        </div>
                        <div class="carousel-item">
                            <div className="carousel-img" style={{ backgroundImage: `url(${Food4})` }}></div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );

    }
}

export default Carousel;