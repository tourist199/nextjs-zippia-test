import Image from "next/image";

import * as S from "./styled";

function Footer() {
  return (
    <S.Footer className="container-fluid">
      <div className="container">
        <div className="row">
          <S.Info className="col-lg-3 order-2 order-lg-1 pt-3">
            <S.LogoWrapper>
              <Image
                height={35}
                width={152}
                src="https://www.zippia.com/ui-router/images/header/logo_white.svg"
              />
            </S.LogoWrapper>
            <S.TextInfo>Email: support@zippia.com</S.TextInfo>
            <S.TextInfo>Copyright © 2021 Zippia, Inc.</S.TextInfo>
          </S.Info>
          <S.FooterNav className="col-lg-9 order-1 order-lg-2 pb-4">
            <div className="row">
              <div className="col-md-3 col-6">
                <S.FootTitle>ZIPPIA</S.FootTitle>
                <ul>
                  <li>
                    <S.Link>About Us</S.Link>
                  </li>
                  <li>
                    <S.Link>Employer Services</S.Link>
                  </li>
                  <li>
                    <S.Link>Terms of Use</S.Link>
                  </li>
                  <li>
                    <S.Link>Privacy Policy</S.Link>
                  </li>
                  <li>
                    <S.Link>Contact Us</S.Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-6">
                <S.FootTitle>CAREERS & JOBS</S.FootTitle>
                <ul>
                  <li>
                    <S.Link>About Us</S.Link>
                  </li>
                  <li>
                    <S.Link>Employer Services</S.Link>
                  </li>
                  <li>
                    <S.Link>Terms of Use</S.Link>
                  </li>
                  <li>
                    <S.Link>Privacy Policy</S.Link>
                  </li>
                  <li>
                    <S.Link>Contact Us</S.Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-6">
                <S.FootTitle>JOB CATEGORIES</S.FootTitle>
                <ul>
                  <li>
                    <S.Link>Architecture and Engineering</S.Link>
                  </li>
                  <li>
                    <S.Link>Arts, Entertainment, Sports, and Media</S.Link>
                  </li>
                  <li>
                    <S.Link>Building and Grounds Maintenance</S.Link>
                  </li>
                  <li>
                    <S.Link>Computer and Mathematical</S.Link>
                  </li>
                  <li>
                    <S.Link>Community and Social Services</S.Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-6">
                <S.FootTitle>BEST COMPANIES IN</S.FootTitle>
                <ul>
                  <li>
                    <S.Link>Alabama</S.Link>
                  </li>
                  <li>
                    <S.Link>Alaska</S.Link>
                  </li>
                  <li>
                    <S.Link>Arizona</S.Link>
                  </li>
                  <li>
                    <S.Link>Arkansas</S.Link>
                  </li>
                  <li>
                    <S.Link>California</S.Link>
                  </li>
                  <li>
                    <S.Link>Colorado</S.Link>
                  </li>
                </ul>
              </div>
            </div>
          </S.FooterNav>
        </div>
      </div>
    </S.Footer>
  );
}

export default Footer;
