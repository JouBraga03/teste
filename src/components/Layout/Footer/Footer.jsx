import React from "react";

import Button from "@material-ui/core/Button";

import { WrapperFooter } from "./Footer.css";

const Footer = () => {
  return (
    <WrapperFooter>
      <Button variant="contained" color="primary">
        Enviar
      </Button>
    </WrapperFooter>
  );
};

export default Footer;
