import "../styles/home.css";
import Slider from "react-slick";

import mainImg from "../assets/images/main-bg.jpg";
import aboutImg from "../assets/images/about-us.jpg";
import plan01 from "../assets/images/plan1.png";
import plan02 from "../assets/images/plan2.png";
import plan03 from "../assets/images/plan3.png";
import ava01 from "../assets/images/ava-1.jpg";
import ava02 from "../assets/images/ava-2.jpg";
import ava03 from "../assets/images/ava-3.jpg";

const Home = () => {
  const counterData = [
    {
      number: 50,
      text: "Businesses",
    },
    {
      number: 1000,
      text: "Individual clients",
    },
    {
      number: 200,
      text: "Bookings per day",
    },
  ];

  const serviceData = [
    {
      icon: "ri-apps-line",
      title: "Easy to use",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit Hic
          maiores nemo fugit officiis ipsum veritatis, voluptate fugiat
          similique libero eligendi.`,
    },
    {
      icon: "ri-calendar-check-line",
      title: "Booking system",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit Hic
          maiores nemo fugit officiis ipsum veritatis, voluptate fugiat
          similique libero eligendi.`,
    },
    {
      icon: "ri-global-line",
      title: "Networking",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit Hic
          maiores nemo fugit officiis ipsum veritatis, voluptate fugiat
          similique libero eligendi.`,
    },
    {
      icon: "ri-rocket-line",
      title: "Digital Marketing",
      desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit Hic
          maiores nemo fugit officiis ipsum veritatis, voluptate fugiat
          similique libero eligendi.`,
    },
  ];

  const chooseData = [
    {
      icon: "ri-calendar-todo-fill",
      title: "Manage Your Business, Staff & Customer Base",
      desc: "Easily control staff schedule, services offered & availability, and keep team updated on the business agenda.",
    },
    {
      icon: "ri-chat-smile-2-line",
      title: "Automated SMS Reminders, Confirmations & Updates",
      desc: "Minimise no-shows by sending automated SMS & email reminders to your clients whose appointments are due.",
    },
    {
      icon: "ri-customer-service-2-line",
      title: "24/7 Hours support",
      desc: "Dedicated customer service at any hour. At your disposal for every question or need.",
    },
  ];

  const planData = [
    {
      imgUrl: plan01,
      title: "Solo - $17/month",
      desc: "250 Online Bookings, Google Calendar Syncing and more..",
      linkUrl: "#",
    },
    {
      imgUrl: plan02,
      title: "Team - $37/month",
      desc: "1500 Online Bookings, Advanced Customer Record Forms and more..",
      linkUrl: "#",
    },
    {
      imgUrl: plan03,
      title: "Ultimate - $97/month",
      desc: "Unlimited Online Bookings, System Customisation, Tailored Mobile App and more..",
      linkUrl: "#",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <>
      {/* main section */}
      <section className="main__section">
        <div className="container">
          <div className="main__wrapper">
            <div className="main__content">
              <div>
                <h2>Booking System</h2>
                <h2 className="highlight">Business and Individuals</h2>
              </div>
              <p className="description">
                Online Bookings • Appointment Calendar • SMS Reminders •
                Marketing Tools • Customer Recalls • Tailored Mobile App •
                Advanced Forms
              </p>
              <div className="main__btns">
                <button className="primary__btn">Get Started Now</button>
                <button className="secondary__btn">Discover More</button>
              </div>
            </div>

            <div className="main__img">
              <img src={mainImg} alt="main-img" />
            </div>
          </div>
        </div>
      </section>

      {/* counter section */}
      <section className="counter" id="projects">
        <div className="container">
          <div className="counter__wrapper">
            {counterData.map((item, index) => (
              <div className="counter__item" key={index}>
                <h3 className="counter__number">{item.number}+</h3>
                <h4 className="counter__title">{item.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* services section */}
      <section id="service">
        <div className="container">
          <div className="services__top-content">
            <h6 className="subtitle">Our Services</h6>
            <h2>
              Save time scheduling appointments and managing your business with
            </h2>
            <h2 className="highlight">BookingOlogy</h2>
          </div>

          <div className="service__item-wrapper">
            {serviceData.map((item, index) => (
              <div className="services__item" key={index}>
                <span className="service__icon">
                  <i className={item.icon}></i>
                </span>
                <h3 className="service__title">{item.title}</h3>
                <p className="description">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* about us section */}
      <section id="about">
        <div className="container">
          <div className="about__wrapper">
            <div className="about__content">
              <h6 className="subtitle">Why choose us</h6>
              <h2>Utilise Our Multichannel</h2>
              <h2 className="highlight">Online Bookings</h2>
              <p className="description about__content-desc">
                Accept bookings from numerous channels including your website,
                Facebook, Instagram & Twitter. Provide easier booking experience
                for your clients by allowing them to schedule services on their
                phones in seconds.
              </p>

              <div className="choose__item-wrapper">
                {chooseData.map((item, index) => (
                  <div className="choose__us-item" key={index}>
                    <span className="choose__us-icon">
                      <i className={item.icon}></i>
                    </span>
                    <div>
                      <h4 className="choose__us-title">{item.title}</h4>
                      <p className="description">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about__img">
              <img src={aboutImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="plan" className="plan">
        <div className="container">
          <div className="plan__top-content">
            <h6 className="subtitle">Your plan</h6>
            <h2>
              Let's have a look
              <span className="highlight"> at what we offer</span>
            </h2>
          </div>

          {/* plan section */}
          <div className="plan__wrapper">
            {planData.map((item, index) => (
              <div className="plan__item" key={index}>
                <h3 id="plan__title">{item.title}</h3>
                <div className="plan__img">
                  <img src={item.imgUrl} alt="" />
                </div>
                <p className="description plan__desc">{item.desc}</p>
                <div>
                  <a href={item.linkUrl} className="learn__more">
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* testimonial section */}
      <section>
        <div className="container">
          <div className="slider__content-top">
            <h6 className="subtitle">Testimonials</h6>
            <h2>
              Trusted by over
              <span className="highlight"> 1.000 customers</span>
            </h2>
          </div>

          <div className="slider__wrapper">
            <Slider {...settings}>
              <div className="slider__item">
                <p className="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veritatis quas harum porro ullam laboriosam minus natus saepe
                  dignissimos a, ipsam alias? Eveniet fuga quas voluptates minus
                  quis aspernatur commodi dolor quia quidem. Animi eaque
                  consectetur minima fugit nam dolore quisquam!
                </p>

                <div className="customer__details">
                  <div className="customer__img">
                    <img src={ava01} alt="" />
                  </div>

                  <div>
                    <h5 className="customer__name">Marco Teobaldo</h5>
                    <p className="description">CEO, WorkCreation</p>
                  </div>
                </div>
              </div>
              <div className="slider__item">
                <p className="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veritatis quas harum porro ullam laboriosam minus natus saepe
                  dignissimos a, ipsam alias? Eveniet fuga quas voluptates minus
                  quis aspernatur commodi dolor quia quidem. Animi eaque
                  consectetur minima fugit nam dolore quisquam!
                </p>

                <div className="customer__details">
                  <div className="customer__img">
                    <img src={ava02} alt="" />
                  </div>

                  <div>
                    <h5 className="customer__name">Anney Martin</h5>
                    <p className="description">Hairdresser</p>
                  </div>
                </div>
              </div>
              <div className="slider__item">
                <p className="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veritatis quas harum porro ullam laboriosam minus natus saepe
                  dignissimos a, ipsam alias? Eveniet fuga quas voluptates minus
                  quis aspernatur commodi dolor quia quidem. Animi eaque
                  consectetur minima fugit nam dolore quisquam!
                </p>

                <div className="customer__details">
                  <div className="customer__img">
                    <img src={ava03} alt="" />
                  </div>

                  <div>
                    <h5 className="customer__name">William Cooper</h5>
                    <p className="description">Dentist</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* newsletter section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter__wrapper">
            <div className="newsletter__content">
              <h6 className="subtitle">Let's work</h6>
              <h2>
                Try our system.
                <br />
                <span className="highlight">
                  Start with your free trial today!
                </span>
              </h2>
            </div>

            <div className="newsletter__form">
              <input type="email" placeholder="Email" />
              <button className="secondary__btn subscribe__btn">
                Subscribe to our newsletter!
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
