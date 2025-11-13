// Login.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Loading from "../components/Loading";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login, loading, } = useAuth();
  const [form, setForm] = useState({ username: "mor_2314", password: "83r5^_"});
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form); // you can handle API later
      navigate("/profile")

    } catch (err) {
      setError("Login failed");
    } 
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {loading ? <Loading/> : 
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>} 
    </div>
  );
};

export default Login;
