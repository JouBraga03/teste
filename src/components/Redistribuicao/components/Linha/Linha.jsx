import React from "react";
import Grid from "@material-ui/core/Grid";

import {
  WrapperLinha,
  WrapperProcessos,
  WrapperCompetencia,
  WrapperClasse,
  WrapperAssuntos,
  WrapperOutrosAssuntos,
  WrapperAcoes,
} from "./Linha.css";

import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import NumeroProcesso from "../NumeroProcesso";
import NomeForo from "../NomeForo";
import DeletarProcesso from "../DeletarProcesso";

const useStyles = makeStyles((theme) => ({
  select: {
    width: "100%",
  },
  gridSpace: {
    marginRight: "2em",
  },
  gridSpaceFirst: {
    margin: "0 1em",
  },
}));

const Linha = () => {
  const classes = useStyles();

  const handleChange = () => console.log("ae");

  const chamaSelect = () => {
    return (
      <Select
        className={classes.select}
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        placeholder="Campo 1"
        value="a"
        onChange={handleChange}
        label="Age"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    );
  };

  return (
    <WrapperLinha>
      <WrapperProcessos>
        <NumeroProcesso numeroProcesso="001632-04-2020.0.00.0999" />
        <NomeForo nome="Foro Catanduva" />
      </WrapperProcessos>

      <WrapperCompetencia>{chamaSelect()}</WrapperCompetencia>

      <WrapperClasse>{chamaSelect()}</WrapperClasse>

      <WrapperAssuntos>{chamaSelect()}</WrapperAssuntos>

      <WrapperOutrosAssuntos>{chamaSelect()}</WrapperOutrosAssuntos>

      <WrapperAcoes>
        <DeletarProcesso />
      </WrapperAcoes>
    </WrapperLinha>
  );
};

export default Linha;
