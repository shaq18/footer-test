import clsx from 'clsx';
import React, { forwardRef } from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import Container from '../../layout/container';
import Grid from '../../layout/grid';
import Section from '../../layout/section';
import Icon from '../../media/icon';
import Link from '../../navigation/link';
import Heading from '../../typography/heading';
import Text from '../../typography/text';

interface FooterProps {
  desktopFooter: {
    legalText: {
      children: {
        text: string;
      }[];
      type: string;
    }[];
    name: string;
    navLinkGroups: {
      _id: string;
      displayText: string;
      name: string;
      navLinks: {
        _id: string;
        displayText: string;
        name: string;
        url: string;
      }[];
      url: string;
    }[];
  };

  mobileFooter: {
    legalText: {
      children: {
        text: string;
      }[];
      type: string;
    }[];
    name: string;
    navLinkGroups: (
      | {
          _id: string;
          displayText: string;
          url: string;
          navLinks?: undefined;
        }
      | {
          _id: string;
          displayText: string;
          navLinks: {}[];
          url: string;
        }
    )[];
  };
}

const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ desktopFooter, mobileFooter, ...props }, ref) => {
    const { is_tSM } = useMediaQuery();
    console.log(desktopFooter, is_tSM);

    return (
      <footer ref={ref} {...props}>
        <Section className="bg-primary text-white">
          <Container>
            {!is_tSM ? (
              <div>
                <nav>
                  <ul>
                    {mobileFooter.navLinkGroups.map((item) => {
                      return (
                        <li
                          key={item._id}
                          className="flex py-3 border-b border-white last:border-b-0"
                        >
                          <Link href={item.url}>{item.displayText}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div className="flex justify-center items-center py-6">
                  <Icon className="mr-4" icon="instagram" />
                  <Icon className="mr-4" icon="facebook" />
                  <Icon className="mr-4" icon="pinterest" />
                  <Icon icon="twitter" />
                </div>
                <div>
                  {mobileFooter.legalText.map((item) => {
                    return item.children.map((child, i) => {
                      return (
                        <Text key={`legal-text-${i}`} className="text-xxs text-center">
                          {child.text}
                        </Text>
                      );
                    });
                  })}
                </div>
              </div>
            ) : (
              <Grid
                className={clsx(
                  'grid-cols-2 gap-8 max-w-360px mx-auto',
                  't-lg:grid-cols-4-auto t-lg:justify-between t-lg:max-w-none'
                )}
              >
                {desktopFooter.navLinkGroups.map((item) => {
                  return (
                    <Grid type="item" key={item._id}>
                      <Heading as="h5" className="mb-3">
                        {item.displayText}
                      </Heading>
                      <nav>
                        <ul>
                          {item.navLinks.map((item) => {
                            return (
                              <li key={item._id}>
                                <Link href={item.url}>{item.displayText}</Link>
                              </li>
                            );
                          })}
                        </ul>
                      </nav>
                    </Grid>
                  );
                })}
              </Grid>
            )}
          </Container>
        </Section>
      </footer>
    );
  }
);

export default Footer;
