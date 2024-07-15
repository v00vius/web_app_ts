import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: fit-content;
  gap: 30px;
  padding: 30px;
  border: 2px solid black;
  border-radius: 8px;
`;

export const CardItem = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 400px;
`;
