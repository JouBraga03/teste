import React from "react";
import PropTypes from "prop-types";

import Typograph from "@material-ui/core/Typography";

const NumeroProcesso = ({ numeroProcesso }) => {
  return <Typograph component="h3">{numeroProcesso}</Typograph>;
};

NumeroProcesso.propTypes = {
  numeroProcesso: PropTypes.string.isRequired,
};

export default NumeroProcesso;
