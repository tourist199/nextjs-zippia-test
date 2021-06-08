import { memo } from "react";

import JobItem from "../JobItem";
import * as S from "./styled";

function JobList({ jobs, jobTitle }) {
  return (
    <div className="container pt-5 pb-5">
      <div className="d-flex pb-5">
        <S.Title>{jobTitle || "Developer"}</S.Title>
        <S.SubTitle>Jobs</S.SubTitle>
      </div>

      <div className="row">
        {jobs.map((job) => (
          <JobItem key={job.jobId} job={job} />
        ))}
      </div>
    </div>
  );
}

export default memo(JobList);
