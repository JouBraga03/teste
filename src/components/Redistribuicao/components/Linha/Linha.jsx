import React from "react";
import Grid from "@material-ui/core/Grid";

import { WrapperNumeroProcessoEForo } from "./Linha.css";
import NumeroProcesso from "../NumeroProcesso";
import NomeForo from "../NomeForo";

const Linha = () => {
  return (
    <>
      <WrapperNumeroProcessoEForo>
        <Grid container>
          <Grid item xs={2}>
            <NumeroProcesso numeroProcesso="001632-04-2020.0.00.0999" />
            <NomeForo nome="Foro Catanduva" />
          </Grid>
        </Grid>
      </WrapperNumeroProcessoEForo>
    </>
  );
};

export default Linha;
