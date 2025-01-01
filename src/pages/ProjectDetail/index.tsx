import { useNavigate, useParams } from "react-router-dom";
import DohyeonText from "../../components/DohyeonText";
import * as S from "./style";
import useGetProjectDetail from "../../hooks/project/useGetProjectDetail";
import JuaText from "../../components/JuaText";
import { COLOR } from "../../constants/colors";
import Sprint from "../../components/Sprint";
import Progress from "../../components/Progress";
import { useProjectStore } from "../../stores/project/useProjectStore";
import Timeline from "../../components/Timeline";

const ProjectDetail = () => {
  const { projectId } = useParams();
  useGetProjectDetail(projectId);
  const navigate = useNavigate();
  const { project } = useProjectStore();

  return (
    <S.Container>
      <S.Header>
        <JuaText color={COLOR[500]} fontSize="4rem">
          {project?.title!}
        </JuaText>
        <S.ProjectDetail>{project?.detail}</S.ProjectDetail>
      </S.Header>
      <S.Grid>
        <S.Section $featured style={{ height: "52rem" }}>
          {(project?.sprint || project?.wbs) && (
            <>
              <DohyeonText color="white" fontSize="2.4rem">
                {project.sprint ? "스프린트 일정" : "WBS 일정"}
              </DohyeonText>
            </>
          )}
          {(project?.sprint || project?.wbs) && project.sprint ? (
            <Sprint />
          ) : (
            <></>
          )}

          {!project?.sprint && !project?.wbs && (
            <S.NoScheduleWrap>
              <S.NoScheduleText>아직 일정이 없습니다.</S.NoScheduleText>
              <DohyeonText color="white" fontSize="2.4rem">
                일정을 만들고 효율적인 팀 프로젝트를 진행하세요!
              </DohyeonText>
              <S.NoScheduleButton
                onClick={() => navigate(`/project/${projectId}/schedule`)}
              >
                시작하기
              </S.NoScheduleButton>
            </S.NoScheduleWrap>
          )}
        </S.Section>

        <S.Section $featured={false} style={{ gridRow: "span 2" }}>
          <DohyeonText color="white" fontSize="2.4rem">
            설정
          </DohyeonText>
        </S.Section>

        <S.Section $featured style={{ height: "20rem" }}>
          <DohyeonText color="white" fontSize="2.4rem">
            진척도
          </DohyeonText>
          {(project?.sprint && project?.sprint?.task.length < 1) ||
          (project?.wbs && project?.wbs?.task.length < 1) ? (
            <S.NoScheduleWrap>
              <S.EmptyText>아직 할 일이 없습니다.</S.EmptyText>
            </S.NoScheduleWrap>
          ) : (
            <Progress data={project?.sprint?.task || project?.wbs?.task} />
          )}
        </S.Section>

        <S.Section
          $featured={false}
          style={{ height: "42rem", gridRow: "span 2" }}
        >
          <DohyeonText color="white" fontSize="2.4rem">
            프로젝트 참여자
          </DohyeonText>
          <S.TeamList>
            <S.TeamMember>
              <S.Avatar $bgColor="#3B82F6">JD</S.Avatar>
              <S.MemberInfo>
                <S.MemberName>John Doe</S.MemberName>
                <S.MemberRole>Lead Developer</S.MemberRole>
              </S.MemberInfo>
            </S.TeamMember>
            <S.TeamMember>
              <S.Avatar $bgColor="#10B981">AS</S.Avatar>
              <S.MemberInfo>
                <S.MemberName>Alice Smith</S.MemberName>
                <S.MemberRole>Designer</S.MemberRole>
              </S.MemberInfo>
            </S.TeamMember>
          </S.TeamList>
        </S.Section>

        <S.Section $featured style={{ height: "20rem" }}>
          <DohyeonText color="white" fontSize="2.4rem">
            타임라인
          </DohyeonText>
          {(project?.sprint && project?.sprint?.task.length < 1) ||
          (project?.wbs && project?.wbs?.task.length < 1) ? (
            <S.NoScheduleWrap>
              <S.EmptyText>아직 할 일이 없습니다.</S.EmptyText>
            </S.NoScheduleWrap>
          ) : (
            <Timeline />
          )}
        </S.Section>

        <S.Section $featured style={{ height: "20rem" }}>
          <DohyeonText color="white" fontSize="2.4rem">
            뭐넣지
          </DohyeonText>
        </S.Section>
      </S.Grid>
      <S.Footer></S.Footer>
    </S.Container>
  );
};

export default ProjectDetail;
