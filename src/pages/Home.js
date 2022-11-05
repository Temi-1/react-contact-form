import React from "react";
import ProfileSection from "../components/ProfileSection";
import LinkSection from "../components/LinkSection";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="home">
            <ProfileSection />
            <LinkSection />
            <Footer />
        </div>   
    )
  }