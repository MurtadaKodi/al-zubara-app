import React from "react";


const NotFound = () => {
  
  return (
    <section className="video">
        {/* <h1 dir="rtl">
          random YouTube videos
        </h1> */}

{/* <iframe id="myiframe" width={560} height={315} src="https://www.youtube.com/embed/Cbk980jV7Ao" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> */}
        <div id="parent-iframe">
          <div id="containeriframe">
          <iframe id="myiframe" width={560} height={315} src="https://www.youtube.com/embed/xVE37tNyvGA" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          {/* <button id="randomvideo" className="random-video-button">
            random video
          </button> */}
        </div>
        {/* <h1 dir="rtl">
          random YouTube videos
        </h1> */}




        <div id="parent-iframe">
          <div id="containeriframe">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/OHVY80n1AJE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          {/* <button id="randomvideo" className="random-video-button">
            random video
          </button> */}
        </div>
      </section>
  );
};

export default NotFound;
