import styled from "styled-components";
import logo from "../assets/logo11 1.svg";

export default function Logo() {
  return (
    <Wrapper>
      <DivSld>
      <a href="/signin">
          <ImageSld src={logo} alt="" />
        </a>
        <TextSld>
          Dietas Magicamente Personalizadas
        </TextSld>
      </DivSld>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
`;

const ImageSld = styled.img`
  display:flex;
  width: 200px;
  height: auto;
`;

const TextSld = styled.h1`
  display: flex;
  color: white;
  margin-left: 20px;
`;

const DivSld = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
`;
