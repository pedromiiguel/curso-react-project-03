/* eslint-disable no-unused-vars */
import P from 'prop-types';
import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export const Base = ({ links = [], logoData, footerHtml, children }) => {
  const html =
    '<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Pedro Miguel</a></p>';
  return (
    <>
      <Menu links={links} logoData={logoData} />

      <Styled.Container>
        {children}
        <Footer html={html} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
};
