import styled from "styled-components";
import logo from "../assets/logo11 1.svg";

export default function Logo() {
  return (
    <Wrapper>
      <DivSld>
        <ImageSld src={logo} alt="" />
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
  width: 150px;
  height: auto;
`;

const TextSld = styled.h1`
  display: flex;
  color: green;
  margin-left: 20px;
`;

const DivSld = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
`;
