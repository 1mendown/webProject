import React, { useState, useEffect } from 'react';
import './home.css';
import Cellphone from '../../assets/images/smartPhones.jpg';
import Cameras from '../../assets/images/cameras.jpg';
import Appliances from '../../assets/images/appliances.jpg';
import Electronics from '../../assets/images/electronicsPhoto.jpg';
import Carousel from '../../components/carousel/carousel';
import Quality from '../../assets/images/quality.jpg';
import New from '../../assets/images/new.jpg';
import Low from '../../assets/images/lowCost.jpg';
import FlatIron from '../../assets/images/flatIron.jpg';
import Instax from '../../assets/images/instax.jpg';
import IphoneApple from '../../assets/images/iphoneApple.jpg';
import Laptop from '../../assets/images/laptops.jpg';
import Minotta from '../../assets/images/minotta.jpg';
import Toaster from '../../assets/images/toaster.jpg';
import Cash from '../../assets/icons/cash.svg';
import Installment from '../../assets/icons/installment.svg';
import Retail from '../../assets/icons/retail.svg';
import Stock from '../../assets/icons/stock.svg';
import FB from '../../assets/icons/facebook.svg';
import IG from '../../assets/icons/instagram.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Contact from '../../assets/icons/contacts.svg';
import Email from '../../assets/icons/email.svg';

const Home = () => {
  let slider1, slider2;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(slider2);
    setNav2(slider1);
  }, [slider2, slider1]);

  return (
    <div className='wrapper'>
      <div className='home-page-top'>
        <div className='header-picture'>
          <h1> WELCOME TO OUR SHOP</h1>
        </div>
      </div>

      <div className='home-page-mid'>
        <div className='first-box'>
          <h1>WHAT WE SELL ARE:</h1>
        </div>

        <div className='second-box'>
          <div className='pic pic1'>
            <img src={Cellphone} alt='cellphone' />
            <h1>Smartphones</h1>
          </div>

          <div className='pic pic2'>
            <img src={Cameras} alt='Cameras' />
            <h1>Cameras</h1>
          </div>

          <div className='pic pic3'>
            <img src={Appliances} alt='Appliances' />
            <h1>Appliances</h1>
          </div>

          <div className='pic pic4'>
            <img src={Electronics} alt='Electronics' />
            <h1>Electronic Devices</h1>
          </div>
        </div>

        <div className='home-page-mid-bot'>
          <div className='home-page-mid-bot-box1'>
            <h1>OUR BEST SELLING PRODUCTS</h1>
          </div>
          <div className='home-page-mid-bot-box2'>
            <div className='home-page-mid-bot-box2-inside-wrapper'>
              <div className='home-page-mid-bot-box-containter1'>
                <Carousel navRef={nav1} sliderRef={slider1} bool={false} />
              </div>
              <div className='home-page-mid-bot-box-containter2'>
                <Carousel navRef={nav2} sliderRef={slider2} bool={true} />
              </div>
            </div>
          </div>

          <div className='homepage-going-to-bot'>
            <div className='box1'>
              <div className='text-box1'>
                <h2>
                  <i> We ensure the quality of products</i>
                </h2>
              </div>
              <div className='pic-box1'>
                <img src={Quality} alt='Quality' />
              </div>
            </div>
            <div className='box2'>
              <div className='pic-box2'>
                <img src={New} alt='new' />
              </div>
              <div className='text-box2'>
                <h2>
                  <i> Products are always Brand new</i>
                </h2>
              </div>
            </div>
            <div className='box3'>
              <div className='text-box3'>
                <h2>
                  <i> Low cost and affordable</i>
                </h2>
              </div>
              <div className='pic-box3'>
                <img src={Low} alt='new' />
              </div>
            </div>

            <div className='home-page-bot'>
              <div className='header-text'>New Arrivals</div>
              <div className='box-container1'>
                <div className='cardOne'>
                  <div className='front'>
                    <img src={FlatIron} alt='Flat Iron' />
                  </div>
                  <div className='back'>
                    <div>
                      <h1>Flat Iron</h1>
                      <h3>Specifications:</h3>
                      <p>
                        Consectetur consequat laboris mollit ullamco. Nulla sunt
                        qui officia dolore nostrud fugiat est et dolor. Eu sunt
                        elit quis non dolor dolor labore reprehenderit
                        incididunt ea. Ut ipsum do consectetur quis ullamco
                        labore consectetur. Adipisicing proident reprehenderit
                        fugiat culpa sunt amet labore in. Reprehenderit
                        reprehenderit dolor consequat sit irure dolor sint
                        labore sint in magna nostrud. Incididunt aliquip nostrud
                        laboris nostrud non ipsum nostrud elit culpa. Voluptate
                        commodo exercitation amet ipsum ut minim adipisicing
                      </p>
                    </div>
                  </div>
                </div>
                <div className='cardTwo'>
                  <div className='front'>
                    <img src={Instax} alt='Instax' />
                  </div>
                  <div className='back'>
                    <div>
                      <h1>Instax Camera</h1>
                      <h3>Specifications:</h3>
                      <p>
                        Consectetur consequat laboris mollit ullamco. Nulla sunt
                        qui officia dolore nostrud fugiat est et dolor. Eu sunt
                        elit quis non dolor dolor labore reprehenderit
                        incididunt ea. Ut ipsum do consectetur quis ullamco
                        labore consectetur. Adipisicing proident reprehenderit
                        fugiat culpa sunt amet labore in. Reprehenderit
                        reprehenderit dolor consequat sit irure dolor sint
                        labore sint in magna nostrud. Incididunt aliquip nostrud
                        laboris nostrud non ipsum nostrud elit culpa. Voluptate
                        commodo exercitation amet ipsum ut minim adipisicing
                      </p>
                    </div>
                  </div>
                </div>
                <div className='cardThree'>
                  <div className='front'>
                    <img src={IphoneApple} alt='Iphone Apple' />
                  </div>
                  <div className='back'>
                    <div>
                      <h1>Iphone 6</h1>
                      <h3>Specifications:</h3>
                      <p>
                        Consectetur consequat laboris mollit ullamco. Nulla sunt
                        qui officia dolore nostrud fugiat est et dolor. Eu sunt
                        elit quis non dolor dolor labore reprehenderit
                        incididunt ea. Ut ipsum do consectetur quis ullamco
                        labore consectetur. Adipisicing proident reprehenderit
                        fugiat culpa sunt amet labore in. Reprehenderit
                        reprehenderit dolor consequat sit irure dolor sint
                        labore sint in magna nostrud. Incididunt aliquip nostrud
                        laboris nostrud non ipsum nostrud elit culpa. Voluptate
                        commodo exercitation amet ipsum ut minim adipisicing
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='box-container2'>
                <div className='cardOne'>
                  <div className='front'>
                    <img src={Laptop} alt='Laptop' />
                  </div>
                  <div className='back'>
                    <div>
                      <h1>Asus Laptop</h1>
                      <h3>Specifications:</h3>
                      <p>
                        Consectetur consequat laboris mollit ullamco. Nulla sunt
                        qui officia dolore nostrud fugiat est et dolor. Eu sunt
                        elit quis non dolor dolor labore reprehenderit
                        incididunt ea. Ut ipsum do consectetur quis ullamco
                        labore consectetur. Adipisicing proident reprehenderit
                        fugiat culpa sunt amet labore in. Reprehenderit
                        reprehenderit dolor consequat sit irure dolor sint
                        labore sint in magna nostrud. Incididunt aliquip nostrud
                        laboris nostrud non ipsum nostrud elit culpa. Voluptate
                        commodo exercitation amet ipsum ut minim adipisicing
                      </p>
                    </div>
                  </div>
                </div>
                <div className='cardTwo'>
                  <div className='front'>
                    <img src={Minotta} alt='Minotta Camera' />
                  </div>
                  <div className='back'>
                    <div>
                      <h1>Minotta Camera</h1>
                      <h3>Specifications:</h3>
                      <p>
                        Consectetur consequat laboris mollit ullamco. Nulla sunt
                        qui officia dolore nostrud fugiat est et dolor. Eu sunt
                        elit quis non dolor dolor labore reprehenderit
                        incididunt ea. Ut ipsum do consectetur quis ullamco
                        labore consectetur. Adipisicing proident reprehenderit
                        fugiat culpa sunt amet labore in. Reprehenderit
                        reprehenderit dolor consequat sit irure dolor sint
                        labore sint in magna nostrud. Incididunt aliquip nostrud
                        laboris nostrud non ipsum nostrud elit culpa. Voluptate
                        commodo exercitation amet ipsum ut minim adipisicing
                      </p>
                    </div>
                  </div>
                </div>
                <div className='cardThree'>
                  <div className='front'>
                    <img src={Toaster} alt='Toaster' />
                  </div>
                  <div className='back'>
                    <div>
                      <h1>Toaster</h1>
                      <h3>Specifications:</h3>
                      <p>
                        Consectetur consequat laboris mollit ullamco. Nulla sunt
                        qui officia dolore nostrud fugiat est et dolor. Eu sunt
                        elit quis non dolor dolor labore reprehenderit
                        incididunt ea. Ut ipsum do consectetur quis ullamco
                        labore consectetur. Adipisicing proident reprehenderit
                        fugiat culpa sunt amet labore in. Reprehenderit
                        reprehenderit dolor consequat sit irure dolor sint
                        labore sint in magna nostrud. Incididunt aliquip nostrud
                        laboris nostrud non ipsum nostrud elit culpa. Voluptate
                        commodo exercitation amet ipsum ut minim adipisicing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h6 className='we-offer-text'>We Accept</h6>
              <div className='We-offer'>
                <div>
                  <img src={Cash} alt='cash' />
                  <h2>Cash</h2>
                </div>
                <div>
                  <img src={Installment} alt='cash' />
                  <h2>Installment</h2>
                </div>
                <div>
                  <img src={Retail} alt='cash' />
                  <h2>Retail</h2>
                </div>
                <div>
                  <img src={Stock} alt='cash' />
                  <h2>Bulk</h2>
                </div>
              </div>
              <div className='footer'>
                <div className='first-box'>
                  <div>
                    <h1>LIGHTHOUSE REPRESENT</h1>
                    <p>
                      Minim nostrud tempor velit ut. Ea eiusmod velit occaecat
                      cupidatat do proident. In consequat ipsum elit eu. Officia
                      minim ad cupidatat proident deserunt sunt laboris ullamco
                      Minim nostrud tempor velit ut. Ea eiusmod velit occaecat
                      cupidatat do proident. In consequat ipsum elit eu. Officia
                      minim ad cupidatat proident deserunt sunt laboris ullamco
                    </p>
                  </div>
                </div>
                <div className='second-box'>
                  <div>
                    <h1>CONTACT INFORMATION</h1>
                  </div>
                  <div className='contact-number'>
                    <div>
                      <img src={Contact} alt='contact number' />
                    </div>
                    <div>
                      <p>09271820755</p>
                    </div>
                    <div>
                      <img src={Email} alt='contact number' />
                    </div>
                    <div>
                      <p>markferdinandsoriano@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className='third-box'>
                  <div>
                    <p>SOCIAL MEDIA</p>
                  </div>
                  <div className='third-box-images'>
                    <div>
                      <img src={FB} alt='Facebook' />
                    </div>
                    <div>
                      <img src={IG} alt='Facebook' />
                    </div>
                    <div>
                      <img src={Twitter} alt='Facebook' />
                    </div>
                  </div>
                </div>
              </div>
              <hr className='hr-line' />
              <div className='last-footer'>
                <div> &copy;Lighthouse Production All rights reserved</div>
                <div></div>
                <div></div>
                <div></div>
                <div>Powered By: Lighthyears</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
