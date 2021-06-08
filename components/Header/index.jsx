import Image from "next/image";
import * as S from "./styled";

function Header() {
  return (
    <S.Header>
      <div className="container d-flex justify-content-between">
        <S.Logo>
          <S.IconLogoFull>
            <Image height={35} width={152} src="/logo-full.svg" />
          </S.IconLogoFull>
          <S.IconLogo>
            <Image height={36} width={36} src="/logo.svg" />
          </S.IconLogo>
        </S.Logo>
        <S.Menu>
          <S.MenuItem>MY JOBS</S.MenuItem>
          <S.MenuItem>CAREER RESEARCH</S.MenuItem>
          <S.MenuItem className="d-none d-md-block">PREFERENCES</S.MenuItem>
        </S.Menu>
      </div>
    </S.Header>
  );
}

export default Header;
