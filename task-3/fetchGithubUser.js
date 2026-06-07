// A program to accept a Github username and returns the details

const API_URL = "https://api.github.com/users";

async function getGithubUser(username) {
  try {
    if (!username) throw new Error("Username must be passed as an argument");

    const response = await fetch(`${API_URL}/${username}`);

    if (!response.ok) {
      throw new Error(`User not found! (status: ${response.status} )`);
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

getGithubUser("HelenOgbonda");
