import styled from "styled-components";

export const SectionList = styled.section`
  width: 1142px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LetterGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const LetterHeader = styled.h2`
  margin-top: 19px;
  margin-left: 26px;
  margin-bottom: 20.5px;
  font-size: 32px;
  color: #9f89a4;
`;

export const ContactListUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ContactItemLI = styled.li``;

export const ContactInfoContainer = styled.div`
  width: 1050px;
  height: 69px;
  padding: 16px;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #fcfcfc;
  border-radius: 12px;

  p {
    margin: 0;
    font-size: 16px;
    color: #333;

    &:nth-of-type(1) {
      font-weight: bold;
    }

    &:nth-of-type(2),
    &:nth-of-type(3) {
      color: #666;
      flex-grow: 1;
    }
  }
`;

export const Avatar = styled.p`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b9a7f8;
  color: #faf8ff;
  border-radius: 50%;
  font-size: 20px;
  flex-shrink: 0;
`;