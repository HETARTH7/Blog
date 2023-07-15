import React from "react";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return <p className="footer">&copy; Hetarth {currentYear}</p>;
};
export default Footer;
