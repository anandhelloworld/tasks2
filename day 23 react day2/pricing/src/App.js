import React from "react";
import "./App.css";
import Card from "./Card";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(faCheckSquare, faCoffee);



function App() {
  const cards = [
    {
      name: "free",
      price: 0,
      line1: "Single User",
      textmuted1:false,
      icon1: "fas fa-check",
      line2: "5GB Storage",
      textmuted2:false,
      icon2: "fas fa-check",
      line3: "Unlimited Public Projects",
      textmuted3:false,
      icon3: "fas fa-check",
      line4: "Community Access",
      textmuted4:false,
      icon4: "fas fa-check",
      line5: "Unlimited Private Projects",
      textmuted5: true,
      icon5: "fas fa-check",
      line6: "Dedicated Phone Support",
      textmuted6: true,
      icon: "",
      line7: "Free Subdomain",
      textmuted7: true,
      icon7: "",
      line8: "Monthly Status Reports",
      textmuted8: true,
      icon8: "",
    },
    {
      name: "plus",
      price: 9,
      line1: "5 Users",
      textmuted1:false,
      icon1: "",
      line2: "50GB Storage",
      textmuted2:false,
      icon2: "",
      line3: "Unlimited Public Projects",
      textmuted3:false,
      icon3: "",
      line4: "Community Access",
      textmuted4:false,
      icon4: "",
      line5: "Unlimited Private Projects",
      textmuted5:false,
      icon5: "",
      line6: "Dedicated Phone Support",
      textmuted6:false,
      icon: "",
      line7: "Free Subdomain",
      textmuted7:false,
      icon7: "",
      line8: "Monthly Status Reports",
      textmuted8: true,
      icon8: "",
    },
    {
      name: "pro",
      price: 49,
      line1: "Unlimited Users",
      textmuted1:false,
      icon1: "",
      line2: "5GB Storage",
      textmuted2:false,
      icon2: "",
      line3: "Unlimited Public Projects",
      textmuted3:false,
      icon3: "",
      line4: "Community Access",
      textmuted4:false,
      icon4: "",
      line5: "Unlimited Private Projects",
      textmuted5:false,
      icon5: "",
      line6: "Dedicated Phone Support",
      textmuted6:false,
      icon: "",
      line7: "Free Subdomain",
      textmuted7:false,
      icon7: "",
      line8: "Monthly Status Reports",
      textmuted8:false,
      icon8: "",
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <Card data={cards[0]} />
          <Card data={cards[1]} />
          <Card data={cards[2]} />
        </div>
      </div>
    </section>
  );
}

export default App;
