import styled from "styled-components";

export const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.grayDark};
  padding: 30px 0;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.gray};
`;

export const Info = styled.div``;

export const TextInfo = styled.p`
  padding: 10px 0;
`;

export const LogoWrapper = styled.div`
  padding-bottom: 30px;
`;

export const FooterNav = styled.div`
  li {
    padding: 8px 0;
  }
`;

export const Link = styled.a`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  line-height: 1.5;

  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const FootTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  margin: 15px 0 23px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
