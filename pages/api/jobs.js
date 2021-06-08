export default async (req, res) => {
  // if (req.method !== 'POST') {
  //   res.status(500).json({message: 'sorry we only accept POST request'})
  // }

  const response = await fetch("https://www.zippia.com/api/jobs/", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: `
      {
        "fetchJobDesc":true,
        "jobTitle":"${req.query.q || "Developer"}",
        "dismissedListingHashes":[],
        ${req.query.lastestFilter ? `"postingDateRange":"7d",` : ""}
        "previousListingHashes":[],
        "numJobs":10
      }
    `,
  });
  const data = await response.json();
  const { jobs } = data;
  if (jobs.length > 10) jobs.length = 10;

  res
    .status(200)
    .json({ message: "Get jobs successfully", data: { ...data, jobs } });
};
