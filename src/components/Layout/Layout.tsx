import Routers from "../../routes/Routers";
import TopNav from "../TopNav/TopNav";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { BusinessOwner, Client } from "../types";

const Layout = () => {
  const [user, setUser] = useState<Client | BusinessOwner | null>(null);

  return (
    <div className="main__layout">
      <TopNav user={user} setUser={setUser} />

      <Routers setUser={setUser} user={user} />

      <Footer />
    </div>
  );
};

export default Layout;
