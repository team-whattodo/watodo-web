import { useState } from 'react';
import { useProjectStore } from '../../stores/project/useProjectStore';
import * as S from './style';
import TaskModal from '../TaskModal';
import StyledButton from '../StyledButton';
import Gantt from '../Gantt';

const Wbs = () => {
  const { project } = useProjectStore();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<"CREATE" | "EDIT">("CREATE");

  return (
    <S.Container>
      {project?.wbs && project?.wbs?.task.length < 1 ? (
        <S.NoScheduleWrap>
          <S.NoScheduleText>아직 할 일이 없습니다.</S.NoScheduleText>
        </S.NoScheduleWrap>
      ) : (
        <S.GanttWrap>
          <Gantt />
        </S.GanttWrap>
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
      <TaskModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        type={modalType}
      />
    </S.Container>
  );
}

export default Wbs