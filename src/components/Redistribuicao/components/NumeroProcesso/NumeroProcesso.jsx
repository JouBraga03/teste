import React from "react";
import PropTypes from "prop-types";

import Typograph from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  typography: {
    fontSize: "11px",
    fontWeight: 700,
  },
}));

const NumeroProcesso = ({ numeroProcesso }) => {
  const classes = useStyles();

  return (
    <Typograph component="h3" className={classes.typography}>
      {numeroProcesso}
    </Typograph>
  );
};

NumeroProcesso.propTypes = {
  numeroProcesso: PropTypes.string.isRequired,
};

export default NumeroProcesso;
