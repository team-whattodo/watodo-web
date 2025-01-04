import { useState } from "react";
import { useProjectStore } from "../../stores/project/useProjectStore";
import SprintTask from "../SprintTask";
import StyledButton from "../StyledButton";
import * as S from "./style";
import TaskModal from "../TaskModal";

const Sprint = () => {
  const { project } = useProjectStore();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<"CREATE" | "EDIT">("CREATE");

  return (
    <S.Container>
      {project?.sprint && project?.sprint?.task.length < 1 ? (
        <S.NoScheduleWrap>
          <S.NoScheduleText>아직 할 일이 없습니다.</S.NoScheduleText>
        </S.NoScheduleWrap>
      ) : (
        <S.Grid>
          {project?.sprint?.task.map((item) => (
            <SprintTask task={item} key={item.id} />
          ))}
        </S.Grid>
      )}
      <S.AddWrap>
        <S.ButtonWrap>
          <StyledButton
            styleType="SUBMIT"
            onClick={() => {
              setModalVisible(true);
              setModalType("CREATE");
            }}
            disabled={false}
            type="button"
          >
            할 일 추가
          </StyledButton>
        </S.ButtonWrap>
      </S.AddWrap>
      {modalVisible && (
        <TaskModal setModalVisible={setModalVisible} type={modalType} />
      )}
    </S.Container>
  );
};

export default Sprint;
