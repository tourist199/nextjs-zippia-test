import styled, { css } from "styled-components";
import { media } from "../../styles/breakpoints";

export const SearchWrapper = styled.div`
  background: ${({ theme }) => theme.colors.grayDark};
  padding: 30px 0;
  position: sticky;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.base};
`;

export const ResultWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  z-index: ${({ theme }) => theme.zIndex.base};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0;
  box-shadow: 0 10px 10px rgb(0 0 0 / 20%);
`;

export const Search = styled.div`
  position: relative;
  width: 100%;
`;

export const TextRed = styled.p`
  color: red;
  padding: 0 20px;
`;

export const InputSearch = styled.input`
  height: 40px;
  width: 100%;
  padding: 10px 20px;
`;

export const ResultItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const SwitchNewJobs = styled.div`
  display: flex;
  margin-left: 15px;
  height: 40px;
`;

export const SwitchItem = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 150px;
  background-color: none;

  ${media.tablet`
    width: 120px;
  `}

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  ${({ $active }) =>
    $active &&
    css`
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white};
    `}
`;
