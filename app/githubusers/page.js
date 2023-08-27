async function fetchGitHubUsers() {
  //const res = await fetch("http://localhost:5232/api/Employee");
  const res = await fetch("https://api.github.com/search/users?q=greg");
  const json = await res.json();
  return json.items;
}

const GitHubUsersPage = async () => {
  const users = await fetchGitHubUsers();
  console.log(users);

  return (
    <div>
      <h1>GitHub Users Page</h1>
    </div>
  );
};

export default GitHubUsersPage;
