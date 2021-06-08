export default async (req, res) => {
  // if (req.method !== 'POST') {
  //   res.status(500).json({message: 'sorry we only accept POST request'})
  // }

  const response = await fetch(
    `https://www.zippia.com/autocomplete/source/?searchString=${req.query.q}&indexableOnly=true`,
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }
  );
  const data = await response.json();
  res.status(200).json(data);
};
