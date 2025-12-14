// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo";


export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <ContactInfo />
              </>
            }
          />
          <Route path="/service/:id" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
