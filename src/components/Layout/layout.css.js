import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: grid;
  display: -ms-grid;

  grid-template-columns: 1fr;
  -ms-grid-columns: 1fr;

  grid-template-rows: 15vh 75vh 10vh;
  -ms-grid-template-rows: 15vh 75vh 10vh;

  grid-template-areas:
    "header header"
    "container container"
    "footer footer";

  min-width: 960px;
`;

export default {
  LayoutWrapper,
};
