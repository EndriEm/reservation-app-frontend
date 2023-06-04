import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
import Home from "../pages/Home";
import Bookings from "../pages/Bookings";
import { Buisness } from "../pages/Buisness";
import { CalendarTest } from "../pages/CalendarTest";
import "../pages/CalendarsTest.css";
import "../components/TopNav/TopNav.css";
import "../components/VerticalNavbar/VerticalNavbar.css";
import SignInBusiness from "../pages/SignInBusiness";
import { SignUpBusiness } from "../pages/SignUpBusiness";
import SignInClient from "../pages/SignInClient";
import { SignUpClient } from "../pages/SignUpClient";
import { BuisnessDetails } from "../pages/BuisnessDetails";
import { BusinessOwner, Client } from "../components/types";
import { CreateBusiness } from "../pages/CreateBusiness";

type Props = {
  user: Client | BusinessOwner | null;
  setUser: React.Dispatch<React.SetStateAction<Client | BusinessOwner | null>>;
};

const Routers: React.FC<Props> = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/business" element={<Buisness />} />
      <Route path="/business/:id" element={<BuisnessDetails />} />
      <Route path="/calendartest" element={<CalendarTest />} />
      <Route path="/create-business" element={<CreateBusiness />} />
      <Route
        path="/sign-in-business"
        element={<SignInBusiness setUser={setUser} />}
      />
      <Route path="/sign-up-business" element={<SignUpBusiness />} />
      <Route
        path="/sign-in-client"
        element={<SignInClient setUser={setUser} />}
      />
      <Route path="/sign-up-client" element={<SignUpClient />} />
    </Routes>
  );
};

export default Routers;
