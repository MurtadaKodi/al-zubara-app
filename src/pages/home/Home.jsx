import { useTheme } from "@mui/material";
import "./Home.css";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [, setmydata] = useState([]);
  const themeee = useTheme()

  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  }, []);

  return (
    <section className="video">
      <div id="parent-iframe">
        <h1 dir="rtl">YouTube videos</h1>
        <div id="containeriframe">
          <iframe
            id="myiframe"
            width={560}
            height={315}
            src="https://www.youtube.com/embed/xVE37tNyvGA"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div id="parent-iframe">
        <h1 dir="rtl">YouTube videos</h1>
        <div id="containeriframe">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OHVY80n1AJE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <section>
        <div id="parent-iframe">
          <h1 dir="rtl">YouTube videos</h1>
          <div id="containeriframe">
            <iframe
              id="myiframe"
              width={560}
              height={315}
              src="https://www.youtube.com/embed/xVE37tNyvGA"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div id="parent-iframe">
          <h1 dir="rtl">YouTube videos</h1>
          <div id="containeriframe">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OHVY80n1AJE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
