import Link from "next/link";

async function fetchGitHubUsers() {
  const res = await fetch("http://localhost:5232/api/Employee");
  //const res = await fetch("https://api.github.com/search/users?q=greg");
  const json = await res.json();
  return json;
}

const GitHubUsersPage = async () => {
  const users = await fetchGitHubUsers();

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th> <th>URL</th> <th>Repos</th> <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.avatar_url} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold"> {user.employeeFirstName}</div>
                    <div className="text-sm opacity-50">
                      {user.employeeLastName}
                    </div>
                  </div>
                </div>
              </td>
              <td></td>
              <th> Go to Repos </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GitHubUsersPage;
