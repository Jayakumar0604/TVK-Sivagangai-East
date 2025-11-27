import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Home from "./Pages/Home/Index";
import About from "./Pages/About/Index";
import DistrictActivities from "./Pages/DistictActivities/Index";
import Volunteers from "./Pages/Volunteer/Index";
import Policy from "./Pages/Policy/Index";
import JoinFormTamil from "./Pages/Volunteer/JoinFormTamil";
import TVKActivities from "./Pages/DistictActivities/TVKActivities";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/district-activities" element={<DistrictActivities />} />
          <Route path="/volunteer-with-us" element={<Volunteers />} />
          <Route path="/policies-vision" element={<Policy />} />
          <Route path="/join" element={<JoinFormTamil />} />
          <Route path="/activities" element={<TVKActivities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
