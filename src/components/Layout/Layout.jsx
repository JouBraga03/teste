import React from "react";

import { LayoutWrapper } from "./layout.css";

import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";

import Redistribuicao from "../Redistribuicao";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />

      <Container>
        <Redistribuicao />
      </Container>

      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
