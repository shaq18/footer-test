import React from 'react';

interface FooterProps {
  desktopFooter: {};
  mobileFooter: {};
}

const Footer = ({ desktopFooter, mobileFooter, ...props }: FooterProps) => {
  console.log(mobileFooter);
  console.log(desktopFooter);
  return <footer {...props}></footer>;
};

export default Footer;
