import React, { useState } from "react";
// import "animate.css"; 

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    rollNo: "",
    studentNo: "",
    email: "",
    gender: "",
    branch: "",
    year: "",
    hackerRankId: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage(result.message);
        setFormData({
          fullName: "",
          rollNo: "",
          studentNo: "",
          email: "",
          gender: "",
          branch: "",
          year: "",
          hackerRankId: "",
        });
      } else {
        setResponseMessage(result.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gradient-to-r from-blue-100 to-white animate__animated animate__fadeIn">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-blue-50 w-full lg:w-1/2 p-8 animate__animated animate__fadeInLeft">
        <h1 className="text-5xl font-bold text-blue-600 mb-6 shadow-lg shadow-blue-300">
          Hour of Code 3.0
        </h1>
        <img
          src="your-diagram-image-path.png"
          alt="Coding Illustration"
          className="max-w-full max-h-full object-contain rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center w-full lg:w-1/2 bg-gradient-to-b from-white to-gray-100 p-8 animate__animated animate__fadeInRight">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="text-3xl font-extrabold text-blue-600 mb-6 text-center">
            Register
          </h2>

          {responseMessage && (
            <p className="text-center text-green-600 mb-4">{responseMessage}</p>
          )}

          {/* Full Name */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Roll No */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Roll No</label>
            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Student No */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Student No</label>
            <input
              type="text"
              name="studentNo"
              value={formData.studentNo}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300 hover:scale-105"
            />
          </div>

         {/* Gender */}
<div className="mb-4">
  <label className="block font-medium mb-2">Gender</label>
  <div className="flex space-x-4">
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={formData.gender === "Male"}
        onChange={handleChange}
        required
        className="focus:ring-blue-600"
      />
      <span>Male</span>
    </label>
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="gender"
        value="Female"
        checked={formData.gender === "Female"}
        onChange={handleChange}
        required
        className="focus:ring-blue-600"
      />
      <span>Female</span>
    </label>
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="gender"
        value="Other"
        checked={formData.gender === "Other"}
        onChange={handleChange}
        required
        className="focus:ring-blue-600"
      />
      <span>Other's</span>
    </label>
  </div>
</div>


          {/* Branch */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Branch</label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300 hover:scale-105"
            >
              <option value="">Select</option>
              <option value="CSIT">CSIT</option>
              <option value="IT">IT</option>
              <option value="CSE">CSE</option>
              <option value="CSE-DS">CSE-DS</option>
              <option value="CSE-AIML">CSE-AIML</option>
              <option value="ECE">ECE</option>
              <option value="ME">ME</option>
            </select>
          </div>

          {/* Year */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300 hover:scale-105"
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
            </select>
          </div>

          {/* HackerRank ID */}
          <div className="mb-4">
            <label className="block font-medium mb-2">HackerRank ID</label>
            <input
              type="text"
              name="hackerRankId"
              value={formData.hackerRankId}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300 hover:scale-105"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
