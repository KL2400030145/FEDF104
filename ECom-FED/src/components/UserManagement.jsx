import { useState, useEffect } from "react";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  // Load users from localStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // Delete a user
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const updatedUsers = users.filter((u) => u.id !== id);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-6">User Management</h2>

      <div className="bg-white shadow-md rounded-lg w-full max-w-3xl p-4">
        {users.length === 0 ? (
          <p className="text-center text-gray-600">No users found.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Role</th>
                <th className="border border-gray-300 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td className="border border-gray-300 p-2">{u.id}</td>
                  <td className="border border-gray-300 p-2">{u.username}</td>
                  <td className="border border-gray-300 p-2 capitalize">
                    {u.role || "user"}
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button
                      onClick={() => handleDelete(u.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
