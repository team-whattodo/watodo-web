import styled from "@emotion/styled";
import { COLOR } from "../../constants/colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.backgroundColor};
  overflow-y: scroll;
`;

export const Header = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0 1.2rem;
`

export const Footer = styled.div`
  width: 100%;
  height: 24rem;
  background-color: ${COLOR.darkColor};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;
  padding: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Section = styled.section<{ $featured: boolean;}>`
  padding: 1.6rem;
  background: ${COLOR.boxColor};
  transition: box-shadow 0.3s ease;
  border: 0.1rem solid ${COLOR.borderColor};
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;

  ${(props) =>
    props.$featured &&
    `
    @media (min-width: 768px) {
      grid-column: span 2;
    }
  `}
`;

export const TeamList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TeamMember = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Avatar = styled.div<{ $bgColor: string }>`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.$bgColor};
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

export const MemberInfo = styled.div``;

export const MemberName = styled.p`
  font-weight: 500;
`;

export const MemberRole = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const ProjectDetail = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
`

export const NoScheduleWrap = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`

export const NoScheduleText = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
`

export const NoScheduleButton = styled.button`
  font-size: 2rem;
  border: none;
  outline: none;
  background-color: ${COLOR[500]};
  cursor: pointer;
  border-radius: 50rem;
  padding: 1rem 2rem;
  transition: all 0.4s;
  &:hover {
    background-color: ${COLOR[300]};
  }
`;

export const EmptyText = styled.p`
  font-size: 2rem;
  color: ${COLOR.grayColor};
`