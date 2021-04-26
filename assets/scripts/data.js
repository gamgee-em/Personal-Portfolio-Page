    /* API CALLS */

// TODO: try to use github api to retrieve repo links - not necessary but fun
// love this function name - albeit not a good one 🤣
const getGitData = async () => {
    var gitApiRequest = `https://api.github.com/users/gamgee-em/repos`;
    var gitData = await (await fetch(gitApiRequest)).json();
    var projectObj = gitData[9];
    var gitAvatar = projectObj.owner.avatar_url;
    var projectApiUrl = projectObj.url;
    console.log(projectObj.owner)
    console.log(projectObj)
    return gitData;
  }