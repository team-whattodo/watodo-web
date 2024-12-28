import { useProjectStore } from '../../stores/project/useProjectStore'
import SprintTask from '../SprintTask';
import * as S from './style'

const Sprint = () => {
  const { project } = useProjectStore();

  return (
    <S.Container>
      <SprintTask />
      <SprintTask />
      <SprintTask />
      <SprintTask />
      <SprintTask />
      <SprintTask />
      <SprintTask />
      <SprintTask />
      <SprintTask />
      <SprintTask />
      <SprintTask />
      <SprintTask />
      <SprintTask />
      <SprintTask />
      <SprintTask />
      <SprintTask />
    </S.Container>
  );
}

export default Sprint