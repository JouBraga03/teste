import React from "react";
import PropTypes from "prop-types";

import Typograph from "@material-ui/core/Typography";

const NomeForo = ({ nome }) => {
  return <Typograph component="h3">{nome}</Typograph>;
};

NomeForo.propTypes = {
  nome: PropTypes.string.isRequired,
};

export default NomeForo;
