import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 20px;
  margin-top: 8px;
  position: relative;
  display: flex;
  cursor: pointer;
  min-height: 224px;
  box-shadow: 0 22px 23px -19px rgb(0 0 0 / 20%);
  width: 100%;
  margin: 10px 0;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background: #fafbfc;
    box-shadow: 0 1px 32px -8px rgb(0 0 0 / 20%);
  }
`;

export const Header = styled.div``;
export const Detail = styled.div``;

export const Icon = styled.div`
  height: 40px;
  width: 40px;
  background-color: ${({ $bgIcon }) => $bgIcon || "purple"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const CompanyName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  padding-top: 8px;
`;

export const Location = styled.p`
  padding-top: 8px;
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const JobTitle = styled.p`
  font-weight: bold;
  padding-top: 8px;
`;

export const Skill = styled.p`
  color: ${({ theme }) => theme.colors.gray1};
  min-height: 50px;
`;
