import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Homescreen = ()=>{
   const href="#";
   const check1 = () =>{
      let x = document.getElementById("ans1");
      if(x.style.display ==="block"){
         x.style.display ="none";
         let i = document.getElementById("plus1");
         i.classList.remove("fa-minus");
         i.classList.add("fa-plus");
      }
      else{
         x.style.display = "block";
         let i = document.getElementById("plus1");
         i.classList.remove("fa-plus");
         i.classList.add("fa-minus");
      }
   }
   const check2 = () =>{
      let x = document.getElementById("ans2");
      if(x.style.display ==="block"){
         x.style.display ="none";
         let i = document.getElementById("plus2");
         i.classList.remove("fa-minus");
         i.classList.add("fa-plus");
      }
      else{
         x.style.display = "block";
         let i = document.getElementById("plus2");
         i.classList.remove("fa-plus");
         i.classList.add("fa-minus");
      }
   }
   const check3 = () =>{
      let x = document.getElementById("ans3");
      if(x.style.display ==="block"){
         x.style.display ="none";
         let i = document.getElementById("plus3");
         i.classList.remove("fa-minus");
         i.classList.add("fa-plus");
      }
      else{
         x.style.display = "block";
         let i = document.getElementById("plus3");
         i.classList.remove("fa-plus");
         i.classList.add("fa-minus");
      }
   }
   const check4 = () =>{
      let x = document.getElementById("ans4");
      if(x.style.display ==="block"){
         x.style.display ="none";
         let i = document.getElementById("plus4");
         i.classList.remove("fa-minus");
         i.classList.add("fa-plus");
      }
      else{
         x.style.display = "block";
         let i = document.getElementById("plus4");
         i.classList.remove("fa-plus");
         i.classList.add("fa-minus");
      }
   }
   const check5 = () =>{
      let x = document.getElementById("ans5");
      if(x.style.display ==="block"){
         x.style.display ="none";
         let i = document.getElementById("plus5");
         i.classList.remove("fa-minus");
         i.classList.add("fa-plus");
      }
      else{
         x.style.display = "block";
         let i = document.getElementById("plus5");
         i.classList.remove("fa-plus");
         i.classList.add("fa-minus");
      }
   }
   return(
       <>
         <section className="main">
              <div className="backposter" style={{ backgroundImage:`url(${process.env.PUBLIC_URL+ "/images/bg-img.jpg"})`,
                                                   backgroundPosition: 'center',
                                                   backgroundSize: 'cover',
                                                   backgroundRepeat: 'no-repeat' }}>
                 <div className="transparent-poster">
                    <header>
                        <img src={process.env.PUBLIC_URL+ "/images/netflix-logo.png"} alt="netflix-img"/>
                        <div><Link to ="/SignIn/">Sign In</Link></div>
                    </header>
                    <section className="notice">
                         <h1>Unlimited movies,TV shows and more.</h1>
                         <h2>Watch anywhere. Cancel anytime.</h2>
                         <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                         <div>
                         <input type="email" placeholder="Email address"/>
                         <Link to="/SignUp/">GET STARTED <i className="fas fa-chevron-right"></i></Link>
                         </div>
                    </section>
                 </div>
              </div>
              <section className="StreamFest" style={{ backgroundImage:`url(${process.env.PUBLIC_URL+ "/images/fp-hero-image-v2.jpg"})`,
                                                   backgroundPosition: 'center',
                                                   backgroundSize: 'cover',
                                                   backgroundRepeat: 'no-repeat' }}>
                 <div className="transparent-StreamFest">
                    <div className="fest-banner">
                       <img src={process.env.PUBLIC_URL+ "/images/stream-fest-logo.png"} alt="stream"/>
                       <div>
                          <h1>Netflix StreamFest is here.</h1>
                          <h2>Watch unlimited. All for free.</h2>
                          <Link to="/movielist/">LEARN MORE <i className="fas fa-chevron-right"></i></Link>
                       </div>
                    </div>
                 </div>
              </section>
              <section className="enjoy-tv">
                 <div className="head">
                    <h1>Enjoy on your TV.</h1>
                    <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                 </div>
                 <div>
                     <img src={process.env.PUBLIC_URL+ "/images/tv1.png"} alt="tv"/> 
                 </div>
              </section>
              <section className="download-show">
                 <div>
                    <img src={process.env.PUBLIC_URL+ "/images/tv2.png"} alt="tv"/>
                 </div>
                 <div className="head"> 
                     <h1>Download your shows to watch offline.</h1>
                     <h2>Save your favourites easily and always have something to watch.</h2>
                 </div>
              </section>
              <section className="watch-everywhere">
                 <div className="head">
                     <h1>Watch everywhere.</h1>
                     <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                 </div>
                 <div> 
                     <img src={process.env.PUBLIC_URL+ "/images/video-tv.png"} alt="tv"/>
                 </div>
              </section>
              <section className="ask-ques">
               <div>
                  <h1>Frequently Asked Questions</h1>
                  <div className="ques" onClick={check1}>
                     <p>What is Netflix ?</p>
                     <p><i className="fas fa-plus" id="plus1"></i></p>
                  </div>
                  <div className="ans" id="ans1">
                     <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                     You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                  </div>
               </div>
               <div>
                  <div className="ques" onClick={check2}>
                     <p>How much does Netflix cost?</p>
                     <p><i className="fas fa-plus"  id="plus2"></i></p>
                  </div>
                  <div className="ans" id="ans2">
                     <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.</p>
                  </div>
               </div>
               <div>
                  <div className="ques" onClick={check3}>
                     <p>Where can I watch?</p>
                     <p><i className="fas fa-plus"  id="plus3"></i></p>
                  </div>
                  <div className="ans" id="ans3">
                     <p>Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                     You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                  </div>
               </div>
               <div>
                  <div className="ques" onClick={check4}>
                     <p>How do I cancel?</p>
                     <p><i className="fas fa-plus"  id="plus4"></i></p>
                  </div>
                  <div className="ans" id="ans4">
                     <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                  </div>
               </div>
               <div>
                  <div className="ques" onClick={check5}>
                     <p>What can I watch on Netflix?</p>
                     <p><i className="fas fa-plus"  id="plus5"></i></p>
                  </div>
                  <div className="ans" id="ans5">
                     <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                  </div>
               </div>
               <article>
                  <p>Ready to watch? Enter your email to create or restart your membership.</p>
                  <input type="email" placeholder="Email address"/>
                  <Link to="/SignUp/">GET STARTED <i className="fas fa-chevron-right"></i></Link>
               </article>
             </section>

              <footer>
                 <section>
                    <p className="call">Questions? Call 000-800-040-1843</p>
                    <article>
                       <div>
                          <p><a href={href}>FAQ</a></p>
                          <p><a href={href}>Investor Relations</a></p>
                          <p><a href={href}>Privacy</a></p>
                          <p><a href={href}>Speed Test</a></p>
                       </div>
                       <div>
                          <p><a href={href}>Help Centre</a></p>
                          <p><a href={href}>Jobs</a></p>
                          <p><a href={href}>Cookie Preferences</a></p>
                          <p><a href={href}>Legal Notices</a></p>
                       </div>
                       <div>
                          <p><a href={href}>Account</a></p>
                          <p><a href={href}>Ways to Watch</a></p>
                          <p><a href={href}>Corporate Information</a></p>
                          <p><a href={href}>Netflix Originals</a></p>
                       </div>
                       <div>
                          <p><a href={href}>Media Centre</a></p>
                          <p><a href={href}>Terms of Use</a></p>
                          <p><a href={href}>Contact Us</a></p>
                       </div>
                    </article>
                    <div className="lang">
                       <span><i className="fas fa-globe"></i></span>
                       <span>English</span>
                       <span><i className="fas fa-sort-down"></i></span>
                    </div>
                    <article>
                       <p>Netflix India</p>
                    </article>
                 </section>
              </footer>
              
         </section>
       </>
   )
}
export default Homescreen;

