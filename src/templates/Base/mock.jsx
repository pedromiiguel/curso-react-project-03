import linksMock from '../../components/NavLinks/mock';
import { GridSection } from '../../components/GridSection';
import gridMock from '../../components/GridSection/mock';

export const mockBase = {
  children: (
    <>
      <GridSection {...gridMock} background />
      <GridSection {...gridMock} />
      <GridSection {...gridMock} background />
      <GridSection {...gridMock} />
      <GridSection {...gridMock} background />
      <GridSection {...gridMock} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p>Teste de footer</p>',
};
