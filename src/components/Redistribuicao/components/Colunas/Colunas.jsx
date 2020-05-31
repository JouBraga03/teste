import React from "react";

import Grid from "@material-ui/core/Grid";
import Typograph from "@material-ui/core/Typography";

import { WrapperColuna } from "./Colunas.css";

import { makeStyles } from "@material-ui/core/styles";

const colunas = [
  "Processos",
  "Competência",
  "Classe",
  "Assuntos",
  "Outros Assuntos",
  "",
];

const useStyles = makeStyles(() => ({
  typography: {
    fontSize: "11px",
    fontWeight: 700,
  },
  gridSpace: {
    marginRight: "3em",
  },
}));

const Colunas = () => {
  const classes = useStyles();

  return (
    <WrapperColuna>
      <Grid container wrap="nowrap">
        {colunas.map((coluna) => (
          <Grid item xs={2} className={classes.gridSpace}>
            <Typograph component="h3" className={classes.typography}>
              {coluna}
            </Typograph>
          </Grid>
        ))}
      </Grid>
    </WrapperColuna>
  );
};

export default Colunas;
