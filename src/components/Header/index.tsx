import headerImg from "../../assets/header.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return(
    <HeaderContainer>
      <img src={headerImg} alt="" />
    </HeaderContainer>
  )
}