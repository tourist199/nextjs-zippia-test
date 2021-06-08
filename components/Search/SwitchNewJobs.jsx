import * as S from "./styled";

function SwitchNewJobs({ lastestFilter, onChangeLastestFilter, isTop }) {
  return (
    <S.SwitchNewJobs $isTop={isTop}>
      <S.SwitchItem
        onClick={() => onChangeLastestFilter(false)}
        $active={!lastestFilter}>
        All
      </S.SwitchItem>
      <S.SwitchItem
        onClick={() => onChangeLastestFilter(true)}
        $active={lastestFilter}>
        Recent posts
      </S.SwitchItem>
    </S.SwitchNewJobs>
  );
}

export default SwitchNewJobs;
