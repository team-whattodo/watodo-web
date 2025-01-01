import { useProjectStore } from "../../stores/project/useProjectStore";
import { Task } from "../../types/task/task";
import * as S from "./style";
import { useRef } from "react";

const Gantt = () => {
  const { project } = useProjectStore();
  const tasks: Task[] | undefined = project?.wbs?.task;

  const taskStartDates = tasks ? tasks.map((task) => new Date(task.start)) : [];
  const earliestStartDate = new Date(
    Math.min(...taskStartDates.map((date) => date.getTime()))
  );

  const latestEndDate = tasks
    ? new Date(
        Math.max(...tasks.map((task) => new Date(task.deadline).getTime()))
      )
    : new Date();
  const totalDays =
    (latestEndDate.getTime() - earliestStartDate.getTime()) /
      (1000 * 60 * 60 * 24) +
    1;

  const calculatePosition = (taskStart: string, taskEnd: string) => {
    const startDiff =
      (new Date(taskStart).getTime() - earliestStartDate.getTime()) /
      (1000 * 60 * 60 * 24);
    const duration =
      (new Date(taskEnd).getTime() - new Date(taskStart).getTime()) /
        (1000 * 60 * 60 * 24) +
      1;
    return { start: startDiff, length: duration };
  };

  const dateList = Array.from({ length: totalDays }, (_, index) => {
    const currentDate = new Date(earliestStartDate);
    currentDate.setDate(currentDate.getDate() + index);
    return currentDate.toISOString().split("T")[0];
  });

  const chartRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging = true;
    startX = e.pageX - (chartRef.current?.offsetLeft || 0);
    scrollLeft = chartRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !chartRef.current) return;
    e.preventDefault();
    const x = e.pageX - (chartRef.current.offsetLeft || 0);
    const walk = x - startX;
    chartRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging = false;
  };

  const formatDate = (rawDate: string) => {
    const date = rawDate.split("-");
    return `${Number(date[1])}월 ${Number(date[2])}일`
  }

  return (
    <S.ChartContainer
      ref={chartRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      <S.ChartTable>
        <thead>
          <tr>
            <S.TaskHeader>할 일</S.TaskHeader>
            {dateList.map((date, index) => (
              <S.DateHeader key={index}>{formatDate(date)}</S.DateHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task) => {
            const { start, length } = calculatePosition(
              task.start,
              task.deadline
            );
            return (
              <tr key={task.id}>
                <S.TaskTitle>{task.title}</S.TaskTitle>
                <S.ChartCell colSpan={totalDays}>
                  <S.TaskBar
                    style={{
                      left: `calc(${(start / totalDays) * 100}% + 0.5rem)`,
                      width: `calc(${(length / totalDays) * 100}% - 1rem)`,
                    }}
                    onClick={() => {}}
                  >
                    {task.branch.split(":")[1]}
                  </S.TaskBar>
                </S.ChartCell>
              </tr>
            );
          })}
        </tbody>
      </S.ChartTable>
    </S.ChartContainer>
  );
};

export default Gantt;
