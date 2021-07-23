import React, { forwardRef } from 'react';
import Container from '../../layout/container';
import Section from '../../layout/section';

interface FooterProps {
  desktopFooter: {};
  mobileFooter: {};
}

const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ desktopFooter, mobileFooter, ...props }, ref) => {
    console.log(mobileFooter);
    console.log(desktopFooter);
    return (
      <footer ref={ref} {...props}>
        <Section className="bg-primary text-white">
          <Container>
            <p>asd</p>
          </Container>
        </Section>
      </footer>
    );
  }
);

export default Footer;
