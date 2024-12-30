import { Task } from "../../types/task/task";
import * as S from "./style";

const Progress = ({ data }: { data?: Task[] }) => {
  if (data) {
    const doneTask = data.filter((item) => item.done);
    return (
      <S.Container>
        <S.ProgressWrap>
          <S.Progress
            $progress={
              doneTask.length > 0
                ? ((data.length / doneTask.length) * 100).toFixed()
                : "0"
            }
          />
        </S.ProgressWrap>
        <S.DotWrap>
          {data.map((item) => (
            <S.Dot key={item.id} />
          ))}
        </S.DotWrap>
        <S.Text>
          <S.Accent>
            {doneTask.length > 0
              ? ((data.length / doneTask.length) * 100).toFixed()
              : "0"}
            %
          </S.Accent>
          {" "}완료
        </S.Text>
      </S.Container>
    );
  }
};

export default Progress;
