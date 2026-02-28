import "./App.css";
import heroImage from "./assests/image.png";
export default function App() {
  return (
    <div>
      <Nav />
      <Banner />
    </div>
  );
}
function Nav() {
  return (
    <div className="Navbar">
      <Logo />
      <Navlist />
    </div>
  );
}
function Logo() {
  return <h2>💼JobFinder</h2>;
}
function Navlist() {
  return (
    <div className="Navlist">
      <ul>
        <li>Home</li>
        <li>Jobs</li>
        <li>Employers</li>
        <li>Dashboard</li>
        <li>Login</li>
        <button className="btn">Sign Up</button>
      </ul>
    </div>
  );
}
function Banner() {
  return (
    <div
      className="banner-content"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="overlay">
        <h2>Find Your Dream Job Today!</h2>
        <p>Browse thousands of job opportunities and jumpstart your career</p>
        <Search />
      </div>
    </div>
  );
}
function Search() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Location" />
        <select>
          <option>Location</option>
        </select>
        <button>Search</button>
      </form>
    </div>
  );
}
