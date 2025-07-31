const UserList = ({ users }) => {
    if (users.length === 0) return null;
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded shadow">
            <img src={user.avatar_url} alt="avatar" className="w-16 h-16 rounded-full mx-auto" />
            <h3 className="text-center mt-2 font-semibold">{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-600 underline text-sm text-center block mt-1">
              View Profile
            </a>
          </div>
        ))}
      </div>
    );
  };
  
  export default UserList;
  