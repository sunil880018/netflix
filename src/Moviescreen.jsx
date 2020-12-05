import React from 'react';
import './index.css';
const Moviescreen = () =>{
    const href = "#";
    return(
        <>
            <section className="movie-list">
                    <div className="header">
                        <img src={process.env.PUBLIC_URL+ "/images/netflix-logo.png"} alt="netflix-img"/>
                    </div>
                    <section className="home-desc">
                       <h1>Netflix Originals</h1>
                       <p>Netflix is the home of amazing original programming that you can’t find anywhere else. Movies, TV shows, specials and more, it’s all tailored specifically to you. Watch now for free.</p>
                       <h2>New Releases</h2>
                    </section>
                    <section className="card">
                       <div>
                           <img  src={process.env.PUBLIC_URL+ "/images/crown.jpg"} alt="netflix-img"/>
                           <p>Crown</p>
                       </div>
                       <div>
                           <img  src={process.env.PUBLIC_URL+ "/images/ginny.jpg"} alt="netflix-img"/>
                           <p>Ginny</p>
                       </div>
                       <div>
                           <img  src={process.env.PUBLIC_URL+ "/images/reason.jpg"} alt="netflix-img"/>
                           <p>Reasons</p>
                       </div>
                       <div>
                           <img  src={process.env.PUBLIC_URL+ "/images/ludo.jpg"} alt="netflix-img"/>
                           <p>Ludo</p>
                       </div>
                       <div>
                           <img  src={process.env.PUBLIC_URL+ "/images/sacred-games.jpg"} alt="netflix-img"/>
                           <p>Secred Games</p>
                       </div>
                       <div>
                           <img  src={process.env.PUBLIC_URL+ "/images/she.jpg"} alt="netflix-img"/>
                           <p>SHE</p>
                       </div>
                       <div>
                           <img  src={process.env.PUBLIC_URL+ "/images/wife.jpg"} alt="netflix-img"/>
                           <p>Wife</p>
                       </div>
                       <div>
                           <img  src={process.env.PUBLIC_URL+ "/images/You.jpg"} alt="netflix-img"/>
                           <p>You</p>
                       </div>
                    </section>
            </section>
            <footer>
                 <section>
                    <p>Questions? Call 000-800-040-1843</p>
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
        </>
    )
}
export default Moviescreen;