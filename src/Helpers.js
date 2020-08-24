export const connectParser = (response, parser) => {
  if (typeof parser !== "function") {
    return response;
  }
  return parser(response);
};

export const getDifference = (num1, num2) => {
  const diff = Math.abs(num1 - num2);
  return isNaN(diff) ? 0 : diff;
};

export const filters = (startYear = 2006, endYear = 2020) => {
  const noOfYears = getDifference(startYear, endYear);
  let years = [];
  for (let year = 0; year <= noOfYears; year++) {
    years.push(startYear + year);
  }
  return [
    { id: "launch_year", title: "Launch Year", values: years },
    { id: "land_Status", title: "Successful Launch", values: ["true", "false"] },
    { id: "launch_Status", title: "Successful Landing", values: ["true", "false"] },
  ];
};
