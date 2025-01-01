import { useProjectStore } from "../../stores/project/useProjectStore";
import DohyeonText from "../DohyeonText";
import * as S from "./style";

const Timeline = () => {
  const { project } = useProjectStore();
  
  const formatDate = (rawDate: string) => {
    const date = rawDate.split("-");
    return `${date[0]}년 ${Number(date[1])}월 ${Number(date[2])}일`
  }

  if (project?.sprint)
    return (
      <S.Container>
        <S.TimelineItem>
          <S.TimelineLabel>현재 진행 중인 스프린트</S.TimelineLabel>
          <S.TimelineContent>
            <DohyeonText color="white" fontSize="2.2rem">
              {project.sprint.title}
            </DohyeonText>
            <S.SprintDetail>{project.sprint.detail}</S.SprintDetail>
          </S.TimelineContent>
        </S.TimelineItem>
        <S.TimelineItem>
          <S.TimelineLabel>시작일</S.TimelineLabel>
          <S.TimelineContent>
            <DohyeonText color="white" fontSize="2.2rem">
              {formatDate(project.sprint.start)}
            </DohyeonText>
          </S.TimelineContent>
        </S.TimelineItem>
        <S.TimelineItem>
          <S.TimelineLabel>마감일</S.TimelineLabel>
          <S.TimelineContent>
            <DohyeonText color="white" fontSize="2.2rem">
              {formatDate(project.sprint.deadline)}
            </DohyeonText>
          </S.TimelineContent>
        </S.TimelineItem>
      </S.Container>
    );
};

export default Timeline;
