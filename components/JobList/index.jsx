import { memo } from "react";

import JobItem from "../JobItem";
import SwitchNewJobs from "../Search/SwitchNewJobs";
import * as S from "./styled";

function JobList({ jobs, jobTitle, lastestFilter, onChangeLastestFilter }) {
  return (
    <div className="container pt-5 pb-5">
      <div className="d-md-flex justify-content-between">
        <div className="d-flex pb-2">
          <S.Title>{jobTitle || "Developer"}</S.Title>
          <S.SubTitle>Jobs</S.SubTitle>
        </div>
        <div className="pb-5 d-flex justify-content-end">
          <SwitchNewJobs
            lastestFilter={lastestFilter}
            onChangeLastestFilter={onChangeLastestFilter}
          />
        </div>
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
