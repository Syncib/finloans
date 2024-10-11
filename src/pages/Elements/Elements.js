import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import d from "../../assets/elements/d.webp";
import f1 from "../../assets/countries/f1.webp";
import f2 from "../../assets/countries/f2.webp";
import f3 from "../../assets/countries/f3.webp";
import f4 from "../../assets/countries/f4.webp";
import f5 from "../../assets/countries/f5.webp";
import f6 from "../../assets/countries/f6.webp";
import f7 from "../../assets/countries/f7.webp";
import f8 from "../../assets/countries/f8.webp";
import g1 from "../../assets/gallery/g1.webp";
import g2 from "../../assets/gallery/g2.webp";
import g3 from "../../assets/gallery/g3.webp";
import g4 from "../../assets/gallery/g4.webp";
import g5 from "../../assets/gallery/g5.webp";
import g6 from "../../assets/gallery/g6.webp";
import g7 from "../../assets/gallery/g7.webp";
import g8 from "../../assets/gallery/g8.webp";
import "./Elements.css";

const Elements = () => {
  const visitData = [
    { countryImg: f1, countryName: "Canada", visits: 645032, percentage: 20 },
    { countryImg: f2, countryName: "Canada", visits: 645032, percentage: 80 },
    { countryImg: f3, countryName: "Canada", visits: 645032, percentage: 90 },
    { countryImg: f4, countryName: "Canada", visits: 645032, percentage: 30 },
    { countryImg: f5, countryName: "Canada", visits: 645032, percentage: 45 },
    { countryImg: f6, countryName: "Canada", visits: 645032, percentage: 55 },
    { countryImg: f7, countryName: "Canada", visits: 645032, percentage: 70 },
    { countryImg: f8, countryName: "Canada", visits: 645032, percentage: 65 },
  ];
  return (
    <div className="overflow-hidden">
      <div className="elements-div">
        <Navbar />
        <div className="container elementsec">
          <div className="row align-items-center gap-3">
            <div className="col-12 col-lg-5">
              <h1 className="hero-title white" data-aos="fade-left">
                Elements
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container elesec">
        <h4 className="pay-subhead mb-3">Text Sample</h4>
        <p className="pay-para mb-5">
          Every avid independent filmmaker has Bold about making that Italic
          interest documentary, or short film to show off their creative
          prowess. Many have great ideas and want to “wow” theSuperscript scene,
          or video renters with their big project. But once you have
          theSubscript “in the can” (no easy feat), how do you move from a
          Strike through of master DVDs with the “Underline” marked hand-written
          title inside a secondhand CD case, to a pile of cardboard boxes full
          of shiny new, retail-ready DVDs, with UPC barcodes and polywrap
          sitting on your doorstep? You need to create eye-popping artwork and
          have your project replicated. Using a reputable full service DVD
          Replication company like PacificDisc, Inc. to partner with is
          certainly a helpful option to ensure a professional end result, but to
          help with your DVD replication project, here are 4 easy steps to
          follow for good DVD replication results:
        </p>
        <hr className="my-5" />
        <h4 className="pay-subhead mb-3">Sample Buttons</h4>
        <p className="pay-para">
          Every avid independent filmmaker has Bold about making that Italic
          interest documentary, or short film to show off their creative
          prowess. Many have great ideas and want to “wow” theSuperscript scene,
          or video renters with their big project. But once you have
          theSubscript “in the can” (no easy feat), how do you move from a
          Strike through of master DVDs with the “Underline” marked hand-written
          title inside a secondhand CD case, to a pile of cardboard boxes full
          of shiny new, retail-ready DVDs, with UPC barcodes and polywrap
          sitting on your doorstep? You need to create eye-popping artwork and
          have your project replicated. Using a reputable full service DVD
          Replication company like PacificDisc, Inc. to partner with is
          certainly a helpful option to ensure a professional end result, but to
          help with your DVD replication project, here are 4 easy steps to
          follow for good DVD replication results:
        </p>
        <div className="d-flex gap-3 mb-3">
          <button className="btn btn-light rounded-0">Default</button>
          <button className="btn btn-primary rounded-0">Primary</button>
          <button className="btn btn-success rounded-0">Success</button>
          <button className="btn btn-info rounded-0">Info</button>
          <button className="btn btn-warning rounded-0">Warning</button>
          <button className="btn btn-danger rounded-0">Danger</button>
          <button className="btn btn-link rounded-0">Link</button>
          <button className="btn btn-light rounded-0" disabled>
            Disable
          </button>
        </div>
        <div className="d-flex gap-3 mb-3">
          <button className="btn btn-light rounded-0">Default</button>
          <button className="btn btn-outline-primary rounded-0">Primary</button>
          <button className="btn btn-outline-success rounded-0">Success</button>
          <button className="btn btn-outline-info rounded-0">Info</button>
          <button className="btn btn-outline-warning rounded-0">Warning</button>
          <button className="btn btn-outline-danger rounded-0">Danger</button>
          <button className="btn btn-link rounded-0">Link</button>
          <button className="btn btn-light rounded-0" disabled>
            Disable
          </button>
        </div>
        <div className="d-flex gap-3 mb-3">
          <button className="btn btn-light">Default</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-danger">Danger</button>
          <button className="btn btn-link">Link</button>
          <button className="btn btn-light" disabled>
            Disable
          </button>
        </div>
        <div className="d-flex gap-3 mb-3">
          <button className="btn btn-light">Default</button>
          <button className="btn btn-outline-primary">Primary</button>
          <button className="btn btn-outline-success">Success</button>
          <button className="btn btn-outline-info">Info</button>
          <button className="btn btn-outline-warning">Warning</button>
          <button className="btn btn-outline-danger">Danger</button>
          <button className="btn btn-link">Link</button>
          <button className="btn btn-light" disabled>
            Disable
          </button>
        </div>
        <div className="d-flex gap-3 mb-3">
          <button className="btn btn-light rounded-pill">Default</button>
          <button className="btn btn-primary rounded-pill">Primary</button>
          <button className="btn btn-success rounded-pill">Success</button>
          <button className="btn btn-info rounded-pill">Info</button>
          <button className="btn btn-warning rounded-pill">Warning</button>
          <button className="btn btn-danger rounded-pill">Danger</button>
          <button className="btn btn-link rounded-pill">Link</button>
          <button className="btn btn-light rounded-pill" disabled>
            Disable
          </button>
        </div>
        <div className="d-flex gap-3 mb-3">
          <button className="btn btn-light rounded-pill">Default</button>
          <button className="btn btn-outline-primary rounded-pill">
            Primary
          </button>
          <button className="btn btn-outline-success rounded-pill">
            Success
          </button>
          <button className="btn btn-outline-info rounded-pill">Info</button>
          <button className="btn btn-outline-warning rounded-pill">
            Warning
          </button>
          <button className="btn btn-outline-danger rounded-pill">
            Danger
          </button>
          <button className="btn btn-link rounded-pill">Link</button>
          <button className="btn btn-light rounded-pill" disabled>
            Disable
          </button>
        </div>
        <div className="d-flex gap-3 mb-3">
          <button type="button" class="btn btn-secondary btn-lg">
            Large button
          </button>
          <button type="button" class="btn btn-primary ">
            Default button
          </button>

          <button type="button" class="btn btn-secondary btn-sm">
            Small button
          </button>
        </div>
        <hr className="my-5" />
        <div>
          <h3 className="pay-subhead mb-5">Left Aligned</h3>
          <div className="row">
            <div className="col-md-3">
              <img className="img-fluid" src={d} alt="d" />
            </div>
            <div className="col-md-9 pay-para">
              Recently, the US Federal government banned online casinos from
              operating in America by making it illegal to transfer money to
              them through any US bank or payment system. As a result of this
              law, most of the popular online casino networks such as Party
              Gaming and PlayTech left the United States. Overnight, online
              casino players found themselves being chased by the Federal
              government. But, after a fortnight, the online casino industry
              came up with a solution and new online casinos started taking
              root. These began to operate under a different business umbrella,
              and by doing that, rendered the transfer of money to and from them
              legal. A major part of this was enlisting electronic banking
              systems that would accept this new clarification and start doing
              business with me. Listed in this article are the electronic
              banking systems that accept players from the United States that
              wish to play in online casinos.
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div>
          <h3 className="pay-subhead mb-5 text-end">Right Aligned</h3>
          <div className="row justify-content-">
            <div className="col-md-9 pay-para">
              Recently, the US Federal government banned online casinos from
              operating in America by making it illegal to transfer money to
              them through any US bank or payment system. As a result of this
              law, most of the popular online casino networks such as Party
              Gaming and PlayTech left the United States. Overnight, online
              casino players found themselves being chased by the Federal
              government. But, after a fortnight, the online casino industry
              came up with a solution and new online casinos started taking
              root. These began to operate under a different business umbrella,
              and by doing that, rendered the transfer of money to and from them
              legal. A major part of this was enlisting electronic banking
              systems that would accept this new clarification and start doing
              business with me. Listed in this article are the electronic
              banking systems that accept players from the United States that
              wish to play in online casinos.
            </div>
            <div className="col-md-3 text-end">
              <img className="img-fluid" src={d} alt="d" />
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div>
          <h3 className="pay-subhead mb-5">Definition</h3>
          <div className="row row-cols-3">
            <div className="col">
              <h4 className="mb-5">Definition 01</h4>
              <p className="pay-para">
                Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks
              </p>
            </div>
            <div className="col">
              <h4 className="mb-5">Definition 02</h4>
              <p className="pay-para">
                Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks
              </p>
            </div>
            <div className="col">
              <h4 className="mb-5">Definition 03</h4>
              <p className="pay-para">
                Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to
                them through any US bank or payment system. As a result of this
                law, most of the popular online casino networks
              </p>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div>
          <h3 className="pay-subhead mb-5">Block Quotes</h3>
          <p className="pay-para p-5 border-start border-2 border-danger bg-lightpurple">
            “Recently, the US Federal government banned online casinos from
            operating in America by making it illegal to transfer money to them
            through any US bank or payment system. As a result of this law, most
            of the popular online casino networks such as Party Gaming and
            PlayTech left the United States. Overnight, online casino players
            found themselves being chased by the Federal government. But, after
            a fortnight, the online casino industry came up with a solution and
            new online casinos started taking root. These began to operate under
            a different business umbrella, and by doing that, rendered the
            transfer of money to and from them legal. A major part of this was
            enlisting electronic banking systems that would accept this new
            clarification and start doing business with me. Listed in this
            article are the electronic banking”
          </p>
        </div>
        <hr className="my-5" />
        <div>
          <h3 className="pay-subhead mb-5">Table</h3>
          <table className="table" id="countrytable">
            <thead>
              <tr>
                <th>#</th>
                <th>Countries</th>
                <th>Visits</th>
                <th>Percentages</th>
              </tr>
            </thead>
            <tbody>
              {visitData.map((item, index) => (
                <tr key={index}>
                  <td>0{index + 1}</td>
                  <td className="d-flex gap-2">
                    <img
                      className="img-fluid d-none d-lg-inline"
                      src={item.countryImg}
                      alt="country"
                    />
                    <span>{item.countryName}</span>
                  </td>
                  <td>{item.visits}</td>
                  <td>
                    <div class="progress" role="progressbar">
                      <div
                        class={`progress-bar ${
                          item.percentage < 40
                            ? "bg-danger"
                            : item.percentage < 70
                            ? "bg-warning"
                            : "bg-success"
                        }`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr className="my-5" />
        <div>
          <h3 className="pay-subhead mb-5">Image Gallery</h3>
          <div className="image-gallery">
            <img src={g1} alt="gallery" />
            <img src={g2} alt="gallery" />
            <img src={g3} alt="gallery" />
            <img src={g4} alt="gallery" />
            <img src={g5} alt="gallery" />
            <img src={g6} alt="gallery" />
            <img src={g7} alt="gallery" />
            <img src={g8} alt="gallery" />
          </div>
        </div>
        <hr className="my-5" />
        <div class="row">
          <div className="col">
            <h3 className="pay-subhead mb-5">Image Gallery</h3>
            <h1>This is header 01</h1>
            <h2>This is header 02</h2>
            <h3>This is header 03</h3>
            <h4>This is header 04</h4>
            <h5>This is header 01</h5>
            <h6>This is header 01</h6>
          </div>
          <div className="col">
            <h3 className="pay-subhead mb-5">Unorderd List</h3>
            <ul className="myunordered">
              <li>Fta Keys</li>
              <li>For Women Only Your Computer Usage</li>
              <li>Facts Why Inkjet Printing Is Very Appealing</li>
              <div className="text-center">
                <li className="d-inline">Addiction When Gambling Becomes</li>
              </div>
              <div className="text-end">
                <li className="d-inline">
                  Protective Preventative Maintenance
                </li>
              </div>
              <li>Dealing With Technical Support 10 Useful Tips</li>
              <li>Make Myspace Your Best Designed Space</li>
              <li>Cleaning And Organizing Your Computer</li>
            </ul>
          </div>
          <div className="col">
            <h3 className="pay-subhead mb-5">Unorderd List</h3>
            <ol className="myordered">
              <li>Fta Keys</li>
              <li>For Women Only Your Computer Usage</li>
              <li>Facts Why Inkjet Printing Is Very Appealing</li>
              <ol className="ordered-list-alpha">
                <li className="d-inline">Addiction When Gambling Becomes</li>

                <ol className="ordered-list-roman">
                  <li className="d-inline">
                    Protective Preventative Maintenance
                  </li>
                </ol>
              </ol>
              <li>Dealing With Technical Support 10 Useful Tips</li>
              <li>Make Myspace Your Best Designed Space</li>
              <li>Cleaning And Organizing Your Computer</li>
            </ol>
          </div>
        </div>
        <hr className="my-5" />
        <div className="row justify-content-center">
          <div className="col-6">
            <h3 className="pay-subhead mb-5">Form Element</h3>
            <form>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="First Name"
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Last Name"
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Last Name"
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Email Address"
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="City"
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Country"
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Message"
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Primary color"
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Accent color"
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Secondary color"
              />
            </form>
          </div>
          <div className="col-4">
            <h3 className="pay-subhead mb-4">Switches</h3>
            <form>
              <div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label class="form-check-label" for="flexSwitchCheckDefault">
                    Default switch checkbox input
                  </label>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexSwitchCheckChecked">
                    Checked switch checkbox input
                  </label>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDisabled"
                    disabled
                  />
                  <label class="form-check-label" for="flexSwitchCheckDisabled">
                    Disabled switch checkbox input
                  </label>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckCheckedDisabled"
                    checked
                    disabled
                  />
                  <label
                    class="form-check-label"
                    for="flexSwitchCheckCheckedDisabled"
                  >
                    Disabled checked switch checkbox input
                  </label>
                </div>
              </div>
              <div>
                <h3 className="pay-subhead my-4">Selectboxes</h3>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div>
                <h3 className="pay-subhead my-4">Checkboxes</h3>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Checked checkbox
                  </label>
                </div>
              </div>
              <div>
                <h3 className="pay-subhead my-4">Radios</h3>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Checked checkbox
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Elements;
