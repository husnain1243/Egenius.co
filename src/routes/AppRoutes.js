import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AniPage } from "../pages/AniPage";
import { Services } from "../pages/Services"
import { Projects } from "../pages/Projects"
import { ContactUs } from "../pages/ContactUs"
import { FormSubmitted } from '../pages/FormSubmitted';

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}>
          Home
        </Route>
        <Route path="/anipage" element={<AniPage/>}>
          AniPage
        </Route>
        <Route path="/services" element={<Services/>}>
          Services
        </Route>
        <Route path="/projects" element={<Projects/>}>
          Projects
        </Route>
        <Route path="/contact-us" element={<ContactUs/>}>
          Contact Us
        </Route>
        <Route path="/form-submited" element={<FormSubmitted/>}>
          Form Submited
        </Route>
      </Routes>
    </div>
  );
};
