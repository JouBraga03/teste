import React from "react";
import PropTypes from "prop-types";

import Typograph from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  typography: {
    fontSize: "12px",
  },
}));

const NomeForo = ({ nome }) => {
  const classes = useStyles();

  return (
    <Typograph component="h3" className={classes.typography}>
      {nome}
    </Typograph>
  );
};

NomeForo.propTypes = {
  nome: PropTypes.string.isRequired,
};

export default NomeForo;
