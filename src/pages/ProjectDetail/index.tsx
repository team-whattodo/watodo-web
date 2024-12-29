import { useNavigate, useParams } from "react-router-dom";
import DohyeonText from "../../components/DohyeonText";
import * as S from "./style";
import useGetProjectDetail from "../../hooks/project/useGetProjectDetail";
import JuaText from "../../components/JuaText";
import { COLOR } from "../../constants/colors";
import Sprint from "../../components/Sprint";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { data } = useGetProjectDetail(projectId);
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Header>
        <JuaText color={COLOR[500]} fontSize="4rem">
          {data?.title!}
        </JuaText>
        <S.ProjectDetail>{data?.detail}</S.ProjectDetail>
      </S.Header>
      <S.Grid>
        <S.Section $featured style={{ height: "52rem" }}>
          {(data?.sprint || data?.wbs) && (
            <DohyeonText color="white" fontSize="3.2rem">
              {data.sprint ? "스프린트 일정" : "WBS 일정"}
            </DohyeonText>
          )}
          {(data?.sprint || data?.wbs) && <Sprint />}

          {!data?.sprint && !data?.wbs && (
            <S.NoScheduleWrap>
              <S.NoScheduleText>아직 일정이 없습니다.</S.NoScheduleText>
              <DohyeonText color="white" fontSize="3.2rem">
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
          <DohyeonText color="white" fontSize="2.8rem">
            설정
          </DohyeonText>
        </S.Section>

        <S.Section $featured style={{ height: "20rem" }}>
          <DohyeonText color="white" fontSize="3.2rem">
            진척도
          </DohyeonText>
          {(data?.sprint && data?.sprint?.task.length < 1) ||
          (data?.wbs && data?.wbs?.task.length < 1) ? (
            <S.NoScheduleWrap>
              <S.EmptyText>아직 할 일이 없습니다.</S.EmptyText>
            </S.NoScheduleWrap>
          ) : (
            <></>
          )}
        </S.Section>

        <S.Section
          $featured={false}
          style={{ height: "40rem", gridRow: "span 2" }}
        >
          <DohyeonText color="white" fontSize="2.8rem">
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

        <S.Section $featured>
          <DohyeonText color="white" fontSize="2.8rem">
            타임라인
          </DohyeonText>
          {(data?.sprint && data?.sprint?.task.length < 1) ||
          (data?.wbs && data?.wbs?.task.length < 1) ? (
            <S.NoScheduleWrap>
              <S.EmptyText>아직 할 일이 없습니다.</S.EmptyText>
            </S.NoScheduleWrap>
          ) : (
            <S.TimelineGrid>
              <S.TimelineItem>
                <S.TimelineLabel>현재 진행 중인 일정</S.TimelineLabel>
                <S.TimelineContent>
                  <DohyeonText color="white" fontSize="2.2rem">
                    로그인 뷰 만들기
                  </DohyeonText>
                </S.TimelineContent>
              </S.TimelineItem>
              <S.TimelineItem>
                <S.TimelineLabel>시작일</S.TimelineLabel>
                <S.TimelineContent>
                  <DohyeonText color="white" fontSize="2.2rem">
                    Jan 15, 2024
                  </DohyeonText>
                </S.TimelineContent>
              </S.TimelineItem>
              <S.TimelineItem>
                <S.TimelineLabel>마감일</S.TimelineLabel>
                <S.TimelineContent>
                  <DohyeonText color="white" fontSize="2.2rem">
                    Jan 15, 2024
                  </DohyeonText>
                </S.TimelineContent>
              </S.TimelineItem>
            </S.TimelineGrid>
          )}
        </S.Section>

        <S.Section $featured>
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
