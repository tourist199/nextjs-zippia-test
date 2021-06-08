import { useRef, useState, useCallback } from "react";

import useOnClickOutside from "../../hooks/useOnClickOutside";
import * as S from "./styled";
import { server } from "../../config";
import Result from "./Result";
import SwitchNewJobs from "./SwitchNewJobs";

function Search({ onChangeTitle, lastestFilter, onChangeLastestFilter }) {
  const [searchKey, setSearchKey] = useState("");
  const [results, setResults] = useState([]);
  const [isShow, setShow] = useState(false);
  const refInput = useRef();
  const refResult = useRef();

  useOnClickOutside([refInput, refResult], () => setShow(false));

  const handleChangeText = useCallback(async (e) => {
    const value = e.target.value;
    setSearchKey(value);
    if (value) {
      const response = await fetch(
        `${server}/api/search-job?q=${value}${
          lastestFilter ? "&lastestFilter=true" : ""
        }`
      );
      const data = await response.json();
      setResults(data);
      setShow(true);
    }
  });

  const handleShowResult = useCallback(() => {
    setShow(true);
  });
  const handleHiddenResult = useCallback(() => {
    setShow(false);
  });

  return (
    <S.SearchWrapper>
      <div className="container">
        <div className="d-flex">
          <S.Search>
            <S.InputSearch
              value={searchKey}
              onChange={handleChangeText}
              onClick={handleShowResult}
              type="text"
              ref={refInput}
              placeholder="Job Title (Business Analyst, Frontend ....)"
            />
            {isShow && results && (
              <Result
                ref={refResult}
                onChangeTitle={onChangeTitle}
                onCloseResult={handleHiddenResult}
                results={results}
                searchKey={searchKey}
              />
            )}
          </S.Search>
          <SwitchNewJobs
            lastestFilter={lastestFilter}
            onChangeLastestFilter={onChangeLastestFilter}
          />
        </div>
      </div>
    </S.SearchWrapper>
  );
}

export default Search;
