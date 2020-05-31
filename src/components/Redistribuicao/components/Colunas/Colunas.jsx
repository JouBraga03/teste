import React from "react";

import Grid from "@material-ui/core/Grid";
import Typograph from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const colunas = [
  "Processos",
  "Competência",
  "Classe",
  "Assuntos",
  "Outroa Assuntos",
];

const useStyles = makeStyles(() => ({
  typography: {
    fontSize: "11px",
  },
}));

const Colunas = () => {
  const classes = useStyles();

  return (
    <Grid container>
      {colunas.map((coluna) => (
        <Grid item xs={2}>
          <Typograph component="h3" className={classes.typography}>
            {coluna}
          </Typograph>
        </Grid>
      ))}
    </Grid>
  );
};

export default Colunas;
