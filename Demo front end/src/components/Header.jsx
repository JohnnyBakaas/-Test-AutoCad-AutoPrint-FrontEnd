import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: red;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
`;

const RightSideHeader = styled.div`
  display: flex;
`;

const StyledP = styled.p`
  font-size: 1.3em;
  margin-left: 10px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>DWG Auto print</h1>
      <RightSideHeader>
        <StyledP>Legg til nytt prosjekt</StyledP>
        <StyledP>Oversikt</StyledP>
      </RightSideHeader>
    </StyledHeader>
  );
};

export default Header;
