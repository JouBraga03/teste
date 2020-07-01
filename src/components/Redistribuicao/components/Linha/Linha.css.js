import styled from "styled-components";

export const WrapperLinha = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "processo competencia classe assunto outros-assuntos acoes";

  padding: 0.5em;
  background: #fff;
  margin-bottom: 10px;
  border-left: 3px solid red;

  grid-gap: 10px;
`;

export const WrapperProcessos = styled.div`
  grid-area: processo;
`;

export const WrapperCompetencia = styled.div`
  grid-area: competencia;
`;

export const WrapperClasse = styled.div`
  grid-area: classe;
`;

export const WrapperAssuntos = styled.div`
  grid-area: assunto;
`;

export const WrapperOutrosAssuntos = styled.div`
  grid-area: outros-assuntos;
`;

export const WrapperAcoes = styled.div`
  grid-area: acoes;
`;

export default {
  WrapperLinha,
  WrapperProcessos,
  WrapperCompetencia,
  WrapperClasse,
  WrapperAssuntos,
  WrapperOutrosAssuntos,
  WrapperAcoes,
};
