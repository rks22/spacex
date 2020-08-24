export const reqParser = ({
  launch_year = null,
  launch_success = null,
  land_success = null,
} = {}) => {
  return {
    limit: 100,
    ...(launch_year && { launch_year }),
    ...(launch_success && { launch_success }),
    ...(land_success && { land_success }),
  };
};

export const _parseMissionIds = (launch) => {
  const { mission_id = [] } = launch;
  if (mission_id.length === 0) {
    return "";
  }
  return mission_id.join(",");
};

export const _parseLanding = (launch) => {
  if (!launch) {
    return null;
  }
  const {
    rocket: { first_stage: { cores: [{ land_success }] } = {} } = {},
  } = launch;
  return land_success;
};

export const _parseImages = (launch) => {
  if (!launch) {
    return null;
  }
  const {
    links: { mission_patch, mission_patch_small },
  } = launch;
  return {
    src: mission_patch,
    srcset: `${mission_patch} 1024w , ${mission_patch_small} 256w`,
    sizes: `(max-width: 700px) 100vw,(max-width: 1024px) 33vw,  (min-width) 1024px 20vw`,
  };
};

export const responseParser = (response = []) => {
  return response.map((launch) => ({
    name: launch.mission_name,
    num: launch.flight_number,
    id: launch.flight_number,
    images: _parseImages(launch),
    description: [
      { title: "Mission Ids", value: _parseMissionIds(launch.mission_id) },
      { title: "Launch Year", value: launch.launch_year },
      { title: "Successful Launch ", value: `${launch.launch_success}` },
      { title: "Successful Landing ", value: `${_parseLanding(launch)}` },
    ],
  }));
};
