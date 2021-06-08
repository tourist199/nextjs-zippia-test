import styled from "styled-components";

import { media } from "../../styles/breakpoints";

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
  background: ${({ theme }) => theme.colors.grayDark};
`;

export const Inner = styled.div``;

export const Menu = styled.ul`
  display: flex;
  color: ${({ theme }) => theme.colors.gray};
`;

export const MenuItem = styled.li`
  height: 60px;
  padding: 20px 0 20px 25px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: #fff;
    transition: 0.5s;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const IconLogoFull = styled.div`
  ${media.phone`
    display: none;
  `}
`;

export const IconLogo = styled.div`
  display: none;

  ${media.phone`
    display: block;
  `}
`;
