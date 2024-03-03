export const getFn = async params => {
  try {
    // console.log("param-", param);
    if (typeof params.url === "string") {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/${params.url}`
      )
    // console.log("response-", response);

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    }
    throw new Error("Invalid QueryKey")
  } catch (e) {
    console.error(e)
  }
}

export default getFn