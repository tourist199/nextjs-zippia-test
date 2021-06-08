import * as S from "./styled";

function SwitchNewJobs({ lastestFilter, onChangeLastestFilter }) {
  return (
    <S.SwitchNewJobs>
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
