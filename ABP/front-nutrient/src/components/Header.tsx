import styled from "styled-components";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { useUser } from "../hooks";
import AdmMenu from "./AdmMenu";

export default function Header() {
  const {token} = useUser();

  return (
    <Wrapper>
        <Logo />
        {/*PARA EXIBIR O ICONE DE PERFIL DO USUARIO
         {token && token.role ==="user" && <UserMenu />}
        {token && token.role ==="adm" && <AdmMenu />} */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width:100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 2px solid black;
  background-color:#64946d;
`;
