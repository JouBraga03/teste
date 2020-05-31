import React from "react";

import Grid from "@material-ui/core/Grid";

const colunas = [
  "Processos",
  "Competência",
  "Classe",
  "Assuntos",
  "Outroa Assuntos",
];

const Colunas = () => {
  return (
    <Grid container>
      {colunas.map((coluna) => (
        <Grid item xs={2}>
          {coluna}
        </Grid>
      ))}
    </Grid>
  );
};

export default Colunas;
