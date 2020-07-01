import styled from "styled-components";

export const WrapperColuna = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "processo competencia classe assunto outros-assuntos";

  grid-gap: 5px;

  margin-top: 10px;
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

export const WrapperProcessosAssuntos = styled.div`
  grid-area: assunto;
`;

export const WrapperOutrosAssuntos = styled.div`
  grid-area: outros-assuntos;
`;

export const WrapperAcoes = styled.div`
  grid-area: acoes;
`;

export default {
  WrapperColuna,
  WrapperProcessos,
  WrapperCompetencia,
  WrapperClasse,
  WrapperProcessosAssuntos,
  WrapperOutrosAssuntos,
  WrapperAcoes,
};
