import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Category } from "../components/types";

export function CreateBusiness() {
  const [business, setBusiness] = useState();
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate()
 

  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((categories) => setCategories(categories));
  }, []);

  console.log("categries:", categories);


  return (
    <div className="wrapper">
      <div className="section1-wrapper">
        <form
          className="form"
          onSubmit={(event: any) => {
            event.preventDefault();

            fetch("http://localhost:4000/business", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                email: event.target.email.value,
                name: event.target.name.value,
                phoneNumber: event.target.phone.value,
                logo: event.target.logo.value,
                categoryId: Number(event.target.category.value),
              }),
            })
              .then((resp) => resp.json())
              .then((business) => setBusiness(business));
              navigate("/sign-in-business")
          }}
        >
          <h1>Create Business</h1>
          <input
            type="email"
            name="email"
            className="input-GS"
            placeholder="Email"
          />
          <input
            type="text"
            name="name"
            className="input-GS"
            placeholder="Business name"
          />

          <input
            type="string"
            name="phone"
            className="input-GS"
            placeholder="Phone Number"
          />
          <input
            type="text"
            name="logo"
            className="input-GS"
            placeholder="Logo"
          />

          <>
            <select
            name="category"
              id="category"
            >
             {categories.map(category => (<option value={category.id} >{category.name}</option>)) }
            </select>
          </>

          <button className="button-GS">Create Business</button>
        </form>
      </div>
    </div>
  );
}
