import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return (
        <footer class="bg-dark p-5">
      <div class="container">
        <div class="row">
          <div class="col-3 footCol3">
          <Link to={'/'} className="logoLink">Foodiez</Link>
          </div>
          <div class="col-6 footColum6">
            <ul>
              <li>
                <a href="#" className="text-muted">Services</a>
              </li>
              <li>
                  <a href="#" className="text-muted">Careers</a>
              </li>
              <li>
                <a href="#" className="text-muted">Why Choose Us</a>
              </li>
              <li>
                  <a href="#" className="text-muted">Legal</a>
              </li>
              <li>
                  <a href="#" className="text-muted">Privacy Policy</a>
              </li>
              <li>
                  <a href="#" className="text-muted">Cookies Policy</a>
              </li>
              <li>
                  <a href="#" className="text-muted">Terms and Conditions</a>
              </li>
            </ul>
          </div>
          <div class="col-3 footColum3">
            <ul>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
}