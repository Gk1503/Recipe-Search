import React from "react";
import "./Home.css";
import Clogo from "../Images/CompanyLogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faIdCard,
  faCircleUser,
  faCircleDot,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal, Button } from "bootstrap";
import Profile from "../Profile/profile";
import SearchResults from "../SearchResults/searchResults";
import Dognut from "../Images/dognut.webp";
import mtFryMomo from "../Images/frym.webp";
import ntCake from "../Images/scake.webp";
import ntnonsticpan from "../Images/nstickpan.webp";
import ntbook from "../Images/book.webp";
import pavBaji from "../Images/pav bhaji.jpg";
import Gobiman from "../Images/gobimanchurian.jpg";
import Pantikka from "../Images/pannertikka.jpg";
import Mixveg from "../Images/mixveg.webp";
import Vadpav from "../Images/vadapav.jpg";
import Faluda from "../Images/Faluuda.jpg";
import lad1 from "../Images/ladyone.webp";
import el1 from "../Images/el1.webp";
import el2 from "../Images/el2.webp";
import el3 from "../Images/el3.webp";
import el4 from "../Images/el4.webp";
import el5 from "../Images/el5.webp";
import Cp1 from "../Images/controperson1.webp";
import Cp2 from "../Images/controperson2.webp";
import Cp3 from "../Images/controperson3.webp";
import Tk1 from "../Images/Tk1.webp";
import Tk2 from "../Images/Tk2.webp";
import Tk3 from "../Images/Tk3.webp";
import Cristmas from "../Images/cristmas.webp";
import cake1 from "../Images/cake1.webp";
import cake2 from "../Images/cake2.webp";
import cake3 from "../Images/cake3.webp";
import cake4 from "../Images/cake4.webp";
import Cpaste from "../Images/cpestri.webp";

function Home() {
  const navigate = useNavigate();
  const [displayprofile, setDisplayProfile] = useState(false);

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  const togglePopup = () => {
    setDisplayProfile(!displayprofile);
  };

  const handlelogout = () => {
    setLoginstatus(false);
    setDisplayProfile(false);
  };

  const [loginstatus, setLoginstatus] = useState(false);
  const [username, setusername] = useState("");

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState();

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      const data = await response.json();
      console.log("Handle Search ", JSON.stringify(data.meals[0].strMeal));
      if (data.meals) {
        console.log("Recip get = ", JSON.stringify(data));
        setResults(data.meals); // Update results with fetched meals
        setShowModal(true);
      } else {
        setResults([]);
        alert("No meals found!");
      }
    } catch (err) {
      console.log(err);
      setError("An error occurred while fetching the data.");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const status = sessionStorage.getItem("Loginstatus");
    setLoginstatus(status);

    const savedusername = sessionStorage.getItem("username");
    if (savedusername) {
      setusername(savedusername);
    }
  }, []);

  return (
    <>
      <div class="container-fluid">
        {displayprofile && <Profile togglePopup={togglePopup} />}
        <div id="HeaderMain">
          <div id="Header1">
            <img src={Clogo} alt=".." id="CompanyLogo" />
            <div id="searchmenu">
              <input
                class="form-control me-2"
                id="searchbar"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                placeholder="Find a recipe or ingredient"
                aria-label="Search"
              />
              <button
                class="btn btn-warning sbr"
                onClick={(e) => handleSearch()}
                type="submit"
              >
                {" "}
                Search
              </button>
            </div>
            {showModal && (
              <div className="modal" tabIndex="-1"  style={{ display: "block"}}>
                <div className="modal-dialog">
                  <div className="modal-content "id="modalboday">
                    <div className="modal-header">
                      <h5 className="modal-title">Here is your Recipe</h5>
                      <button type="button" className="close" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
                      <div></div>
                    </div>
                    <div className="modal-body" >
                      {/* <h5>{results}</h5>
                      <p>{results.strInstructions}</p> */}
                      <h3>{results[0].strMeal}</h3>
                      <div id="searchmodal">
                        <div id="searchmodalimg">
                      <img id="recipeimg" src={results[0].strMealThumb} alt="..."/>
                      <h4>{results[0].strCategory}</h4>
                      <h6>Country Special : {results[0].strArea}</h6>
                      </div>
                      <div id="searchmodalingre">
                      <h5>Ingredients:</h5>
                      <ul>
                        <li>{results[0].strIngredient1}</li>
                        <li>{results[0].strIngredient2}</li>
                        <li>{results[0].strIngredient3}</li>
                        <li>{results[0].strIngredient4}</li>
                        <li>{results[0].strIngredient5}</li>
                        <li>{results[0].strIngredient6}</li>
                        <li>{results[0].strIngredient7}</li>
                        <li>{results[0].strIngredient8}</li>
                      </ul>
                      </div>
                      <div id="searchmodalmea">
                      <h5>Measurements : </h5>
                      <ul>
                      <li>{results[0].strMeasure1}</li>
                        <li>{results[0].strMeasure2}</li>
                        <li>{results[0].strMeasure3}</li>
                        <li>{results[0].strMeasure4}</li>
                        <li>{results[0].strMeasure5}</li>
                        <li>{results[0].strMeasure6}</li>
                        <li>{results[0].strMeasure7}</li>
                        <li>{results[0].strMeasure8}</li>
                      </ul>
                        </div>
                      </div>
                      <h3 id="Instructions">Instructions</h3>
                       <p id="instructionsdetails">{results[0].strInstructions}</p>
                        <div>
                          <h6>Video :{results[0].strYoutube}</h6>
                          </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {!loginstatus ? (
              <>
                <div id="btns">
                  <button
                    type="button"
                    class="btn btn-outline-success bbtn"
                    id="lbtn"
                    onClick={handleLogin}
                  >
                    <FontAwesomeIcon icon={faRightToBracket} /> Login
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger bbtn"
                    id="sbtn"
                    onClick={handleSignup}
                  >
                    <FontAwesomeIcon icon={faIdCard} /> Signup
                  </button>
                </div>
                <div id="magzine">
                  Magazine v |
                  <div id="items">
                    <ul id="subs">
                      <li className="subitems">Subscribe</li>
                      <li className="subitems">Manage Your Subscription</li>
                      <li className="subitems">Give a Gift subscription</li>
                      <li className="subitems">Get Help</li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div id="Afterlogin">
                  <div id="btns">
                    <div id="myaccount">
                      <FontAwesomeIcon id="circlecolor" icon={faCircleUser} />
                      &nbsp;&nbsp;My Account v |
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <ul id="profiledisplay">
                      <li className="Profile" onClick={togglePopup}>
                        Profile
                      </li>
                      <li className="Logout" onClick={handlelogout}>
                        Logout
                      </li>
                    </ul>
                  </div>
                  <div id="magzine2">
                    Magazine v |
                    <div id="items2">
                      <ul id="subs2">
                        <li className="subitems2">Subscribe</li>
                        <li className="subitems2">Manage Your Subscription</li>
                        <li className="subitems2">Give a Gift subscription</li>
                        <li className="subitems2">Get Help</li>
                      </ul>
                    </div>
                  </div>
                  <div id="newsletter">
                    <div id="nesletterdes">NewLetter</div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div id="Header2">
            <div class="NavMenus">DINNERS</div>
            <div class="NavMenus">MEALS</div>
            <div class="NavMenus">INGRIDENTS</div>
            <div class="NavMenus">OCCASIONS</div>
            <div class="NavMenus">CUISINS</div>
            <div class="NavMenus">KITCHEN TIPS</div>
            <div class="NavMenus">NEWS</div>
            <div class="NavMenus">FEATURES</div>
            <div class="NavMenus">ABOUT US</div>
          </div>
        </div>

        <div id="content">
          <div id="viewscontent">
            <div id="indiasno1">
              India's <label id="trust"> #1 Trusted Recipe Resource </label>{" "}
              since 2005
            </div>
            <div id="OR">
              <FontAwesomeIcon icon={faCircleDot} id="dot1" /> 113k{" "}
              <label id="or"> Orginal Recipe</label>
            </div>
            <div id="RR">
              <FontAwesomeIcon icon={faCircleDot} id="dot2" /> 6.9M+
              <label id="rr"> Ratings & Reviews</label>
            </div>
            <div id="HC">
              <FontAwesomeIcon icon={faCircleDot} id="dot3" /> 60M{" "}
              <label id="hc"> Home Cooks</label>
            </div>
          </div>
        </div>

        <div id="homecontent">
          <div class="container" id="dogandnt">
            <div id="dognut">
              <div class="card" id="dogcard">
                <img src={Dognut} id="dog" alt="..." />
                <div class="card-body">
                  <h6 class="card-title">HANUKKAH</h6>
                  <h3 id="our">Our 12 Best Hanukkah Desserts</h3>
                  <p class="card-text">
                    Happy Hanukkah! Make your holiday sweeter with these
                    delicious breads, doughnuts, and other treats
                  </p>
                </div>
              </div>
            </div>
            <div id="newstrending">
              <h3 id="ntheadding">News & Trending</h3>
              <div id="nt1">
                <img src={mtFryMomo} class="ntimg" alt=".." />
                <div class="nttext">
                  <span> Got A New Air Fryer? Here's How To Use It</span>
                </div>
              </div>
              <div id="nt2">
                <img src={ntCake} class="ntimg" alt=".." />
                <div class="nttext">
                  <span>
                    {" "}
                    So You Got an Instant pot-Here's What to Make First
                  </span>
                </div>
              </div>
              <div id="nt3">
                <img src={ntnonsticpan} class="ntimg" alt=".." />
                <div class="nttext">
                  <span>
                    This Easy Trick Will Make Your Nonstick Cookware Last So
                    Much Longer{" "}
                  </span>
                </div>
              </div>
              <div id="nt4">
                <img src={ntbook} class="ntimg" alt=".." />
                <div class="nttext">
                  <span>
                    {" "}
                    These Are our Favorite Dolly Parton kitchen Releases in 2024
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Five Start Ratings Items */}
          <div class="container">
            <div id="fivestarrateitems">
              <h3 id="fivehedding">
                Five Star Ratings <FontAwesomeIcon icon={faArrowRight} />
              </h3>
              <div id="ratemain">
                <div id="rm1">
                  <div id="raterow1">
                    <div class="card mcard">
                      <img
                        src={pavBaji}
                        class="card-img-top fiveimg"
                        alt="..."
                      />
                      <div class="card-body">
                        <h6 class="card-title cardtitle">Pav Bhaji</h6>
                        <h3 class="card-text cardtext">
                          Mumbai Style Pav Bhaji
                        </h3>
                        <p class="ratingsstart">
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <span class="ratingcount">2,658 Ratings</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="raterow2">
                    <div class="card mcard">
                      <img
                        src={Gobiman}
                        class="card-img-top fiveimg"
                        alt="..."
                      />
                      <div class="card-body">
                        <h6 class="card-title cardtitle">Gobi Manchurian</h6>
                        <h3 class="card-text cardtext">
                          Chef's Gobi Manchurian
                        </h3>
                        <p class="ratingsstart">
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <span class="ratingcount">2,555 Ratings</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="raterow3">
                    <div class="card mcard">
                      <img
                        src={Pantikka}
                        class="card-img-top fiveimg"
                        alt="..."
                      />
                      <div class="card-body">
                        <h6 class="card-title cardtitle">Panner Tikka</h6>
                        <h3 class="card-text cardtext">
                          Punjab Style Panner Tikka
                        </h3>
                        <p class="ratingsstart">
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <span class="ratingcount">3 ,658 Ratings</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="rm2">
                  <div id="raterow4">
                    <div class="card mcard">
                      <img
                        src={Mixveg}
                        class="card-img-top fiveimg"
                        alt="..."
                      />
                      <div class="card-body">
                        <h6 class="card-title cardtitle">Mix Veg</h6>
                        <h3 class="card-text cardtext">
                          Northen Style Mix Veg
                        </h3>
                        <p class="ratingsstart">
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <span class="ratingcount">1,758 Ratings</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="raterow5">
                    <div class="card mcard">
                      <img
                        src={Vadpav}
                        class="card-img-top fiveimg"
                        alt="..."
                      />
                      <div class="card-body">
                        <h6 class="card-title cardtitle">Vada Pav</h6>
                        <h3 class="card-text cardtext">
                          Amchi Mumbai Vada pav
                        </h3>
                        <p class="ratingsstart">
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <span class="ratingcount">3 ,058 Ratings</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="raterow6">
                    <div class="card mcard">
                      <img
                        src={Faluda}
                        class="card-img-top fiveimg"
                        alt="..."
                      />
                      <div class="card-body">
                        <h6 class="card-title cardtitle">Falooda</h6>
                        <h3 class="card-text cardtext">5Star Falooda</h3>
                        <p class="ratingsstart">
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <span class="ratingcount">3 ,100 Ratings</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div id="cookbox">
              <div id="subcook1">
                <div id="homeofcook">
                  <h2>HOME OF THE HOME COOK</h2>
                  <p id="homeofcookdes">
                    We know our community (that's you!) is the key ingredient{" "}
                    <br />
                    thats sets us apart.
                    <span id="learnmore">
                      LEARN MORE
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </p>
                </div>
                <div id="cooksmessage">
                  <div id="lad1">
                    <img src={lad1} alt=".." />
                  </div>
                  <div id="waffleandmsg">
                    <div id="waffle">
                      <h5>waffle</h5>
                    </div>
                    <div id="cokmsg">
                      <p>
                        "My first waffles from scratch and picky husband thought
                        htese were amazing! Light and fluffy with a great
                        flavor. I also made the homemade vanilla maple syrup.""
                      </p>
                      <span>FOOTBALLFRL16, OKLAHOMA, JOINED 2009</span>
                    </div>
                  </div>
                </div>

                <div id="socialmedia">
                  <div id="facebooksm">
                    <FontAwesomeIcon icon={faFacebook} /> 3.9M
                  </div>
                  <div id="instgramsm">
                    <FontAwesomeIcon icon={faInstagram} /> 2.2M
                  </div>
                  <div id="pintrestsm">
                    <FontAwesomeIcon icon={faPinterest} />
                    1.3M
                  </div>
                  <div id="tiktoksm">
                    <FontAwesomeIcon icon={faTiktok} /> 678.4K
                  </div>
                  <div id="utubesm">
                    <FontAwesomeIcon icon={faYoutube} /> 1.9M
                  </div>
                </div>
              </div>
              <div id="subcook2">
                <div id="ourpeople">
                  <h2>OUR PEOPLE</h2>
                  <p>
                    Testing,tasting,editing,and tasting again-our food pros are
                    dedicated to showcasting the best of what you, our home cook
                    heroes,are doing in your kitchens.
                  </p>
                </div>
                <div id="editleader">
                  <h6>
                    EDITORIAL LEADERSHIP <FontAwesomeIcon icon={faArrowRight} />
                  </h6>

                  <div id="elimg">
                    <div>
                      <img src={el1} alt=".." />
                    </div>
                    <div>
                      {" "}
                      <img src={el2} alt=".." />
                    </div>
                    <div>
                      {" "}
                      <img src={el3} alt=".." />
                    </div>
                    <div>
                      {" "}
                      <img src={el4} alt=".." />
                    </div>
                    <div>
                      {" "}
                      <img src={el5} alt=".." />
                    </div>
                  </div>
                </div>
                <div id="controandtestkitchen">
                  <div id="contributors">
                    <div id="contrtag">
                      <span>
                        Contributors&nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </div>
                    <div id="controimg">
                      <div>
                        <img src={Cp1} alt=".." />
                      </div>
                      <div>
                        <img src={Cp2} alt=".." />
                      </div>
                      <div>
                        <img src={Cp3} alt=".." />
                      </div>
                    </div>
                  </div>
                  <div id="testkitchen">
                    <div id="testktag">
                      <span>
                        Test kitchen
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </div>
                    <div id="testkimg">
                      <div>
                        <img src={Tk1} alt=".." />
                      </div>
                      <div>
                        <img src={Tk2} alt=".." />
                      </div>
                      <div>
                        <img src={Tk3} alt=".." />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div id="crismats">
              <img src={Cristmas} alt="Christmas Image" />
              <div id="crismatsovertag">
                <div class="content-box">
                  <h6>IN THE KITCHEN</h6>
                  <h2>The Ultimate Holiday Cookie Guide</h2>
                  <p>
                    Get all of the recipes, tips, and ideas from our community
                    to make this season the sweetest one yet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 id="hollyhead">Holly Jolly Christmas Desserts</h1>
          <div id="Hollyjollymain">
            {/* <div id="h1holly"><h1>Holly Jolly Christmas Desserts</h1></div> */}
            <div id="hollyjollyleft">
              <div id="hollyjollyleftcontent">
                <div id="hjl1">
                  <div id="hjlimg">
                    <img src={cake1} alt="..." />
                  </div>
                  <div id="hjltext">
                    Christmas Desserts You Can Make in Your 9x13 Baking Dish
                  </div>
                </div>
                <div id="hjl2">
                  <div id="hjlimg">
                    <img src={cake2} alt="..." />
                  </div>
                  <div id="hjltext">7 Gorgeous Yule Log Cakes</div>
                </div>
                <div id="hjl3">
                  <div id="hjlimg">
                    <img src={cake3} alt="..." />
                  </div>
                  <div id="hjltext">
                    Chef Jonh's Top Christmas Desserts and Treats
                  </div>
                </div>
                <div id="hjl4">
                  <div id="hjlimg">
                    <img src={cake4} alt="..." />
                  </div>
                  <div id="hjltext">Our 10 Best Christmas Fudge Recipes</div>
                </div>
              </div>
            </div>
            <div id="hollyjollyright">
              <div id="hjrightimg">
                <img src={Cpaste} alt="..." />
                <h6>PIES</h6>
                <h2>Our 20 Best Christmas pie Recipes</h2>
              </div>
            </div>
          </div>

          <footer>
            <div id="footer">
              <div id="footer1">
                <img src={Clogo} alt=".." />
                <br />
                <button id="newsletterbtn">NEWSLETTERS</button>
                <br />
                <span id="Followus">Follow Us</span>
                <div id="footersm">
                  <div>
                    <FontAwesomeIcon icon={faFacebook} />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faPinterest} />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faTiktok} />
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                </div>
              </div>
              <div id="footer2">
                <div> DINNERS</div>
                <br />
                <div>INGREDIENTS</div>
                <br />
                <div>CUISINES</div>
                <br />
                <div> NEWS</div>
                <br />
                <div> MEALS</div>
                <br />
                <div>OCCASIONS</div>
                <br />
                <div> KITCHEN TIPS</div>
                <br />
                <div>FEATURES</div>
                <br />
              </div>
              <div id="footer3">
                <div>About us</div>
                <div>Anti-Racism Pledge</div>
                <div>Product Vetting</div>
                <div>Advertise</div>
                <div>contact</div>
              </div>
              <div id="footer4">
                <div>Editorial Process</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Careers</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;
