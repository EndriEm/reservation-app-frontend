import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Business, Category } from "../components/types";
import "../styles/Buisness.css";

export function Buisness() {
  const [buisnesses, setBuisnesses] = useState<Business[]>([]);
  const [categoriesToFilter, setCategoriesToFilter] = useState("");
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch("http://localhost:4000/business")
      .then((res) => res.json())
      .then((businessesFromdb) => setBuisnesses(businessesFromdb));
  }, []);


  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((businessesFromdb) => setCategories(businessesFromdb));
  }, []);


  function selectCategoriesForFiltering(data: any) {
    setCategoriesToFilter(data);
  }

  

  let filteredBuisnesses = [];
  categoriesToFilter
    ? (filteredBuisnesses = buisnesses
        .filter((business) =>
          business.name.toLowerCase().includes(search.toLowerCase())
        )
        .filter((item) => item.category.name === categoriesToFilter))
    : (filteredBuisnesses = buisnesses.filter((business) =>
        business.name.toLowerCase().includes(search.toLowerCase())
      ));


  return (
    <section className="main-section">
      <aside className="filter-section">
        <h1 id="title">Filter By Category</h1>
        <section className="categories">
          {categories.map((item: Category) => (
            <>
              <input
                type="radio"
                name="hi"
                id=""
                value={item.name}
                className="checkbox"
                onChange={(e) => {
                  selectCategoriesForFiltering(e.target.value);
                }}
              />
              <p>{item.name}</p>
            </>
          ))}
        </section>
      </aside>
      <main className="main">
        <nav className="search-bar">
          <form className="search" action="">
            <input
              type="search"
              placeholder="Search for buisnesses.."
              required
              className="search-input"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </form>
        </nav>
        <section className="grid-section">
          {filteredBuisnesses.map((business) => (
            <div id="container">
              <div className="product-details">
                <h1>{business.name}</h1>
                <span className="hint-star star">
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                </span>

                <p className="information">
                  {business.category.services.map((service) => (
                    <p>{service.name}</p>
                  ))}
                </p>

                <div className="control">
                  <button className="btn">
                    <Link to={`/business/${business.id}`}>
                      <span className="buy">Visit Page</span>
                    </Link>
                  </button>
                </div>
              </div>

              <div className="product-image">
                <img src={business.logo} alt="" />

                <div className="info">
                  <h2> Description</h2>
                  <ul>
                    <li>
                      <strong>Category : </strong> {business.category.name}
                    </li>
                    <li>
                      <strong>Phone number : </strong> {business.phoneNumber}
                    </li>
                    <li>
                      <strong>Address: </strong> Tirana, Albania
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </section>
  );
}
