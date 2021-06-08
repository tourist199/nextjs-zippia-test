import { memo } from "react";

import * as S from "./styled";
import _truncate from "lodash/truncate";

function JobItem({ job }) {
  const bgIcon = "#" + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
      <S.Wrapper>
        <S.Header>
          <S.Icon $bgIcon={bgIcon}>{job.companyInitial}</S.Icon>
          <S.CompanyName>{job.companyName}</S.CompanyName>
          <S.Location>{job.location}</S.Location>
          <S.JobTitle>{job.OBJtitleDisplay}</S.JobTitle>
        </S.Header>
        <S.Detail>
          <hr />
          <S.Skill>
            Skills: {_truncate(job.skillsets.join(", "), { length: 50 })}
          </S.Skill>
          <hr />
          <div className="d-flex justify-content-between">
            <span>{job.postedDate}</span>
            <span>{job.estimatedSalary}</span>
          </div>
        </S.Detail>
      </S.Wrapper>
    </div>
  );
}

export default memo(JobItem);
