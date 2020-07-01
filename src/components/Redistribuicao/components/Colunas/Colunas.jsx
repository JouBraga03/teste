import React from "react";

import Typograph from "@material-ui/core/Typography";

import {
  WrapperColuna,
  WrapperProcessos,
  WrapperCompetencia,
  WrapperClasse,
  WrapperProcessosAssuntos,
  WrapperOutrosAssuntos,
  WrapperAcoes,
} from "./Colunas.css";

import { makeStyles } from "@material-ui/core/styles";

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

  const showText = (text) => (
    <Typograph component="h3" className={classes.gridSpace}>
      {text}
    </Typograph>
  );

  return (
    <WrapperColuna>
      <WrapperProcessos>{showText("Processo")}</WrapperProcessos>

      <WrapperCompetencia>{showText("Competência")}</WrapperCompetencia>

      <WrapperClasse>{showText("Classe")}</WrapperClasse>

      <WrapperProcessosAssuntos>
        {showText("Assuntos")}
      </WrapperProcessosAssuntos>

      <WrapperOutrosAssuntos>
        {showText("Outros Assuntos")}
      </WrapperOutrosAssuntos>

      <WrapperAcoes />
    </WrapperColuna>
  );
};

export default Colunas;
