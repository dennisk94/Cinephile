import { getYear } from '../utilities/getDates';

function Footer() {
    return (
  
      <div>
          <footer>
              <p>&copy; { getYear() } | Dennis Kim</p>
          </footer>
      </div>
    )
  }
  
  export default Footer;
  