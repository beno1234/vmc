import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-primary text-primary-content text-white text-center">
        <div>
          <img src={logo} width={260} className="mx-auto" />
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
