import React, { forwardRef } from "react";

import * as S from "./styled";

function Result({ results, searchKey, onChangeTitle, onCloseResult }, ref) {
  return (
    <S.ResultWrapper ref={ref}>
      {results?.length === 0 && searchKey && (
        <S.TextRed>
          Sorry, we can't find that job title. Please try another.
        </S.TextRed>
      )}
      {results &&
        results.map((item) => (
          <S.ResultItem
            onClick={() => {
              onChangeTitle(item.name);
              onCloseResult();
            }}
            key={item.id}>
            {item.name}
          </S.ResultItem>
        ))}
    </S.ResultWrapper>
  );
}

export default forwardRef(Result);
