import { COLOR } from "../../constants/colors";
import { Task } from "../../types/task/task";
import DohyeonText from "../DohyeonText";
import JuaText from "../JuaText";
import * as S from "./style";

const SprintTask = ({ task }: { task: Task }) => {
  return (
    <S.Container>
      <JuaText color={COLOR[500]} fontSize="2rem">
        {task.title}
      </JuaText>
      <DohyeonText color="white" fontSize="1.2rem">
        {task.done ? "개발을 완료했습니다." : "개발 중입니다."}
      </DohyeonText>
      <S.Branch readOnly value={task.branch.split(":")[1]}/>
    </S.Container>
  );
};

export default SprintTask;
