import React from "react";
import image1 from "./assets/images/image1.jpg";
import image2 from "./assets/images/image2.jpg";
import image3 from "./assets/images/image3.jpg";
import image4 from "./assets/images/image4.jpg";
import image5 from "./assets/images/image5.jpg";
import image6 from "./assets/images/image6.jpg";
import image7 from "./assets/images/image7.jpg";
//Some dummy data
const data = [
  {
    title: "The Villa, Murano Hill, Manhattan, NY",
    price: "$110000",
    image: image1,
  },
  {
    title: "Santa Ynez5, Santa Barbara County, CA",
    price: "$280000",
    image: image2,
  },
  {
    title: "La Grange 565, Stanislaus County, USA",
    price: "$325000",
    image: image3,
  },
  {
    title: "46 Cardinal Lae Suite 12 Green Bay, WI",
    price: "$470000",
    image: image4,
  },
  {
    title: "Andalucia, Mlga, Baha De Casares, Spain",
    price: "$500000",
    image: image5,
  },
  {
    title: "Avenida España DeCar Malaga 2980, Spain",
    price: "$620000",
    image: image6,
  },
  {
    title: "Lamalou-Les-Bains, Roussillon, France",
    price: "$780000",
    image: image7,
  },
];

class Card extends React.Component {
  render() {
    return (
      <div class="main">
        <div class="show-on-small hide-on-med-and-up">
          {data.map(({ title, price, image }) => (
            <div class="wrapper">
              <div class="row">
                <div class="col s12 m6 ">
                  <div class="card">
                    <div class="card-image">
                      <img src={image} />
                    </div>
                    <div class="card-stacked">
                      <div class="card-content">
                        <div class="card-address">
                          <h6 class="align-left">{title}</h6>
                        </div>
                        <div class="card-price">
                          <h6 class="align-right">{price}</h6>
                        </div>
                      </div>
                      <div class="card-action ">
                        <div class="amenities">
                          <i class="material-icons margin">airport_shuttle</i>
                          <i class="material-icons margin">network_wifi</i>
                          <i class="material-icons margin">store</i>
                          <i class="material-icons margin">weekend</i>
                        </div>
                        <div class="favourites">
                          <span class="heart">
                            <i class="fa fa-heart-o" aria-hidden="true"></i>{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="hide-on-small-only">
          {data.map(({ title, price, image }) => (
            <div class="wrapper">
              <div class="col s12 m6">
                <div class="card horizontal small">
                  <div class="card-image">
                    <img src={image} />
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                      <div class="card-address">
                        <h6 class="align-left">{title}</h6>
                      </div>
                      <div class="card-price">
                        <h6 class="align-right">{price}</h6>
                      </div>
                    </div>
                    <div class="card-action ">
                      <div class="amenities">
                        <i class="material-icons margin">airport_shuttle</i>
                        <i class="material-icons margin">network_wifi</i>
                        <i class="material-icons margin">store</i>
                        <i class="material-icons margin">weekend</i>
                      </div>
                      <div class="favourites">
                        <span class="heart">
                          <i class="fa fa-heart-o" aria-hidden="true"></i>{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Card;
