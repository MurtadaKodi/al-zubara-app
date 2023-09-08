import ReactImageGallery from 'ReactImageGallery';
import React from 'react';

const Northern = () => {
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
    <div id="wrapper">
      <div id="container">
        <section className="open-book">
          <header>
            <h1>الزبارة AlZubara</h1>
            <h1>الزبارة AlZubara</h1>
          </header>
          <article>
            <h2 className="chapter-title"> Northern House <br /> البيت الشمالي</h2>
            In the northeastern part of the town is located a large courtyard house, so-called Northern House (البيت الشمالي "al-bait al-shimali") excavated by the Qatari team in 1983-84 under the direction of Mohammad Jassim Al Khulaifi. The house is preserved in two different phases. In the early phase the rectangular building measures ca. 106m EW x 45m NS, is mainly built with limestones and beachrocks, is built around at least 4 (?) central main courtyards surrounded by a number of rooms fulfilling different functions. A portico is commonly found along the southern length of the courtyards providing a shaded area. Entrance halls are often elaborated using gypsum plastered interior walls and decorative elements in the plaster of door frames. A sharp bend at the end of the hall ensured that the courtyard areas were shielded from direct view, either from the hallway or from the street outside. Other common rooms are hammams, rooms used for reception, cooking, and food preparation area, and for storage. In the late phase the building is strongly reduced in size in comparison to the older phase (see hatched walls in the building plan). The late Northern House is built on top of the western half of the previous building re-using several main walls; it measures ca. 35 x 45m. Four main spaces were identified, but the complete plan remains speculative; clear are only two small rooms, one at the southeastern corner (6.6 x 3.5m) with a sandy floor built on top of the entrance to the southern vestibule of the early Northern House, and a second room at the southwestern corner (6 x 3.5m) also with a sandy floor.
            <p >


              She paused, realizing that what she was about to do was a trend years ago. This severely increased the chance of her project being mocked after launch. What was the specific trend Erin remembered? Skeuomorphism.
            </p>

            <dl>
              <dt><strong>skeu•o•morph</strong></dt>
              <dd>
                <em>noun</em><br />
                an object or feature that imitates the design of a similar artifact made from another material.
              </dd>
            </dl>
            <p>
              Outside of skeuomorphism, the idea actually was not very silly. Erin always had an appreciation towards print work. The thought of mimicking similar designs onto a web interface has always fascinated her. So, why not start with the classic print design of a novel?
            </p>
            <p>
              She began to jot down a list of elements that are typically in a novel:
            </p>
            <ul>
              <li>Serif typefaces</li>
              <li>
                Header area with the title of the book on the left, and the author of said book on the right. <em>Erin is aware that content within the header of the same page as a chapter title does not appear, but she made an exception</em>.
              </li>
              <li>An adorned chapter title</li>
              <li>A dropcap for the first letter of the first paragraph of the chapter</li>
              <li>Indented paragraphs</li>
              <li>Page numbers</li>
            </ul>
            <p>
              She was then picturing herself making marks on a novel like she used to in school. In her true fashion, she got carried away with "What ifs." 
            </p>
            <ul>
              <li>
                "What if highlighting the text actually looked <mark>like a highlighter</mark>?"
                <ul>
                  <li>"What if I wanted it to be <mark className="pink">pink</mark>?"</li>
                  <li>"<mark className="blue">Blue</mark>?"</li>
                  <li>"<mark className="green">Green</mark>?"</li>
                  <li>"<mark className="orange">Orange</mark>?"</li>
                </ul>
              </li>
              <li>"What if I found <s>a typo</s><sup>an error in the content</sup> and wanted to make a correction?"</li>
              <li>"What if I was viewing this on mobile—"</li>
            </ul>
            <p>
              The true obstacle showed its form. Responsiveness. How on Earth will she make this work?
            </p>
            <p>
              Erin pulled out her notepad and started sketching. First she began to illustrate the wireframe of the book in its entirety. Then she recorded some notes on how each element would break down as the screen size got smaller. After several minutes, the blueprint was complete. She came to the conclusion that mobile viewing must stay minimal. The pages go away, which makes the page numbers no longer have a function so they must go away, and if those go away then there is no need for a cover since it is used to help hold and protect pages.
            </p>
            <p>
              She looks back at the blinking cursor of her blank canvas in Sublime Text 2. Doubt begins to linger in the back of her mind with the thought of her new code never being used and her time spent ends up being a waste. Her fingers were typing anyway.
            </p>
            <p>
              Erin smirked, "Well at least I think it's worth a try."
            </p>
          </article>

          
  

          <footer>
            <ol id="page-numbers">
              <li>1</li>
              <li>2</li>
            </ol>
          </footer>
        </section>

        

        <ReactImageGallery/>

        <iframe className='fram-map' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d526.7706636207308!2d51.02703489858154!3d25.983279818701924!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2sqa!4v1693979139202!5m2!1sar!2sqa"  style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    

      </div>
    </div>
  </div>
  );
}

export default Northern;
