import { useState, useEffect } from "react";
import Footer from "../../../components/Footer";

import Header from "../../../components/Header";
import JobList from "../../../components/JobList";
import Search from "../../../components/Search";
import { server } from "../../../config";

function Jobs({ data }) {
  const [jobs, setJobs] = useState(data?.data.jobs);
  const [jobTitle, setJobTitle] = useState("");
  const [lastestFilter, setLastestFilter] = useState(false);

  useEffect(async () => {
    const response = await fetch(
      `${server}/api/jobs?q=${jobTitle}${
        lastestFilter ? "&lastestFilter=true" : ""
      }`
    );
    const data = await response.json();
    setJobs(data?.data.jobs);
  }, [jobTitle, lastestFilter]);

  return (
    <div>
      <Header />
      <Search
        onChangeTitle={setJobTitle}
        lastestFilter={lastestFilter}
        onChangeLastestFilter={setLastestFilter}
      />
      <JobList jobs={jobs} jobTitle={jobTitle} />
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(`${server}/api/jobs`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}

export default Jobs;
