export const baseUrl = "https://ghibliapi.herokuapp.com";
export const movieEndpoint = "/films";
export const peopleEndpoint = "/people";
export const locationsEndpoint = "/locations";
export const speciesEndpoint = "/species";
export const vehiclesEndpoint = "/vehicles";

export const checkAndParse = (res) => {
    if (!res.ok) {
      throw { status: res.status, msg: "Something went wrong" };
    }
    return res.json();
  };
