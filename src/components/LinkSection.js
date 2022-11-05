import React from "react";
import { Navigate } from "react-router-dom";

export default function LinkSection() {
  const [goToContactForm, setGoToContactForm] = React.useState(false);

  if (goToContactForm) {
    return <Navigate to="/contact" />;
  }

  return (
    <div className="links">
        <a id="twitter_link" href="https://twitter.com/theZuriTeam/">Twitter Page</a>
        <a id="btn_zuri" href="https://training.zuri.team/">Zuri Team</a>
        <a id="books" href="http://books.zuri.team/">Zuri Books</a>
        <a id="book_python" href="https://books.zuri.team/python-for-beginners?ref_id=TemiA">Python made Easy</a>
        <a id="pitch" href="https://background.zuri.team">Click to Unearth a coder's past</a>
        <a id="book_design" href="https://books.zuri.team/design-rules">Learn Design for Free!</a>
        <a 
          href=""
          id="contact"
          onClick={() => {
            setGoToContactForm(true);
          }}
        >
          {" "}
          Contact Us
        </a>
    </div>
  )
}