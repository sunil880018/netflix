import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const SignIn = () =>{
    const href="#";
   return (
       <>
          <div className="backposter" style={{ backgroundImage:`url(${process.env.PUBLIC_URL+ "/images/bg-img.jpg"})`,
                                                   backgroundPosition: 'center',
                                                   backgroundSize: 'cover',
                                                   backgroundRepeat: 'no-repeat' }}>
                 <div className="transparent-poster">
                    <header>
                        <img src={process.env.PUBLIC_URL+ "/images/netflix-logo.png"} alt="netflix-img"/>
                    </header>
                    <section className="form">
                         <form>
                             <h1>Sign In</h1>
                             <input type="email" placeholder="Enter email or phone Number"/><br/>
                             <input type="password" placeholder="Password"/><br/>
                             <button>Sign In</button>
                             <div>
                                 <p>New to Netflix?</p>
                                 <Link to="/SignUp/">Sign up now.</Link>
                             </div>
                             <div><h5>This page is protected by Google reCAPTCHA to ensure you're not a bot.</h5></div>
                         </form>
                    </section>
                 </div>
         </div>
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
export default SignIn;