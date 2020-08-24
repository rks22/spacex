
export const getDifference = (num1, num2) => {
  const diff = Math.abs(num1 - num2);
  return isNaN(diff) ? 0 : diff;
};

export const getUpdatedFilters = (req, state) => {
  if (!req || !state) {
    return state;
  }
  let reqFilters = Object.keys(req);
  return state.map((filter) => {
    let selected = reqFilters.includes(filter.id)
      ? req[filter.id]
      : filter.selected;
    return {
      ...filter,
      selected,
    };
  });
};

export const parsePreviousFilters = (state) => {
    if(!state){
        return null;
    }
 let filters = {};
  state.forEach((filter) => {
    if(filter.selected !== null) {
        filters[filter.id] = filter.selected;
    }
  });
  return filters;
};

export const getInitialFilterState = (startYear = 2006, endYear = 2020) => {
  const noOfYears = getDifference(startYear, endYear);
  let years = [];
  for (let year = 0; year <= noOfYears; year++) {
    years.push(startYear + year);
  }
  return [
    { id: "launch_year", title: "Launch Year", selected: null, values: years },
    {
      id: "launch_success",
      title: "Successful Launch",
      selected: null,
      values: ["true", "false"],
    },
    {
      id: "land_success",
      title: "Successful Landing",
      selected: null,
      values: ["true", "false"],
    },
  ];
};
