import { useState } from "react";
import DohyeonText from "../../components/DohyeonText";
import { COLOR } from "../../constants/colors";
import * as S from "./style";
import { BsLightning } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import MakeSprint from "../../components/MakeSprint";
import MakeWbs from "../../components/MakeWbs";

const MakeSchedule = () => {
  const [scheduleType, setSchedulType] = useState<"SPRINT" | "WBS">("SPRINT");

  return (
    <S.Container>
      <S.Box>
        <S.TitleWrap>
          <DohyeonText color={COLOR[500]} fontSize="3.2rem">
            일정 시작하기
          </DohyeonText>
          <S.Logo src="/assets/WATODO.svg" />
        </S.TitleWrap>
        <S.Label>일정 관리 방식</S.Label>
        <S.SelectWrap>
          <S.SelectItem
            $selected={scheduleType === "SPRINT"}
            onClick={() => setSchedulType("SPRINT")}
          >
            <BsLightning size={36} />
            <DohyeonText color="white" fontSize="2.4rem">
              스프린트
            </DohyeonText>
            <S.SelectDetail>작은 프로젝트에 적합해요</S.SelectDetail>
          </S.SelectItem>
          <S.SelectItem
            $selected={scheduleType === "WBS"}
            onClick={() => setSchedulType("WBS")}
          >
            <IoCalendarOutline size={36} />
            <DohyeonText color="white" fontSize="2.4rem">
              WBS
            </DohyeonText>
            <S.SelectDetail>장기 프로젝트에 적합해요</S.SelectDetail>
          </S.SelectItem>
        </S.SelectWrap>
        {
          scheduleType === "SPRINT" ? <MakeSprint /> : <MakeWbs />
        }
        
      </S.Box>
    </S.Container>
  );
};

export default MakeSchedule;
