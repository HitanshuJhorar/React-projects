import { useState } from "react";
import { AuthContext } from "./auth-context";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem("currentUserEmail")
      ? { email: localStorage.getItem("currentUserEmail") }
      : null,
  );

  function signup(email, password) {
    const users = JSON.parse(localStorage.getItem("user") || "[]");

    if (users.find((u) => u.email === email)) {
      return { success: false, error: "Email already exists" };
    }

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("user", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", email);

    setUser({ email });
    return { success: true };
  }

  function login(email, password) {
    const users = JSON.parse(localStorage.getItem("user") || "[]");
    const existingUser = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!existingUser) {
      return { success: false, error: "Invalid email or password" };
    }

    localStorage.setItem("currentUserEmail", email);
    setUser({ email });

    return { success: true };
  }

  function logout() {
    localStorage.removeItem("currentUserEmail");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signup, login, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
