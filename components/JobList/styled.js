import styled from "styled-components";
import { media } from "../../styles/breakpoints";

export const Title = styled.h2`
  font-size: 40px;
  padding-right: 20px;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${media.phone`
    font-size: 28px;
  `}
`;

export const SubTitle = styled.span`
  font-weight: 600;
  color: #333;
  font-size: 24px;
  text-transform: capitalize;
  opacity: 0.5;
  padding-top: 15px;

  ${media.phone`
    font-size: 20px;
    padding-top: 5px;
  `}
`;
