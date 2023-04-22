import { FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

const PageLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
