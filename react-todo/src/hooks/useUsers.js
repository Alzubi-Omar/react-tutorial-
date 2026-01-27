import { useEffect, useState } from "react";

export function useUsers(isEnabled) {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [userError, setUsersError] = useState("");

  useEffect(() => {
    if (!isEnabled) return;

    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        setLoadingUsers(true);
        setUsersError("");

        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("Failed to fetch users");

        const data = await res.json();
        setUsers(data);
      } catch (error) {
        if (error?.name === "AbortError") return;
        setUsersError("Could not load users");
      } finally {
        setLoadingUsers(false);
      }
    };

    fetchUsers();

    return () => controller.abort();
  }, [isEnabled]);

  return { users, loadingUsers, userError };
}
