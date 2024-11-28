import React, { useState } from "react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value.trimStart(), 
    }));
  };
  const validateForm = () => {
    // Basic validation
    const {
      fullName,
      rollNo,
      studentNo,
      email,
      gender,
      branch,
      year,
      hackerRankId,
    } = formData;

    if (
      !fullName ||
      !rollNo ||
      !studentNo ||
      !email ||
      !gender ||
      !branch ||
      !year ||
      !hackerRankId
    ) {
      setResponseMessage("All fields are required.");
      return false;
    }

    if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      setResponseMessage("Full Name can only contain letters and spaces.");
      return false;
    }

    if (!/^\d+$/.test(rollNo) || !/^\d+$/.test(studentNo)) {
      setResponseMessage("Roll No and Student No must be numbers.");
      return false;
    }

    if (!/^[a-zA-Z0-9._%+-]+@akgec\.ac\.in$/.test(email)) {
      setResponseMessage("Email must be in the format abc@akgec.ac.in.");
      return false;
    }

    return true;
  };

  const sanitizeData = (data) => {
    const sanitizedData = {};
    for (const key in data) {
      sanitizedData[key] = data[key].replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    return sanitizedData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const sanitizedData = sanitizeData(formData);

      const response = await fetch(" daal diyo bhai ", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitizedData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage(result.message || "Registration successful!");
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
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Section */}
      <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 p-6 sm:p-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-4 lg:mb-6 text-center lg:text-left">
          Hour of Code 3.0
        </h1>
        <img
          src="amico.png"
          alt="Coding Illustration"
          className="w-4/5 sm:w-3/5 max-h-80 object-contain rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          style={{ backgroundColor: "transparent" }}
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center w-full lg:w-1/2 p-4 sm:p-6 md:p-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-lg"
        >
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-6 text-center"
            style={{ color: "#236397" }}
          >
            Register
          </h2>

          {responseMessage && (
            <p className="text-center text-green-600 mb-4">{responseMessage}</p>
          )}

          {/* Full Name */}
          <div className="mb-4">
            <label className="block font-medium mb-2" style={{ color: "#236397" }}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-1 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300"
            />
          </div>

          {/* Roll No and Student No */}
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex-1">
              <label className="block font-medium mb-2" style={{ color: "#236397" }}>
                Roll No <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                required
                className="w-full p-1 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-2" style={{ color: "#236397" }}>
                Student No <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="studentNo"
                value={formData.studentNo}
                onChange={handleChange}
                required
                className="w-full p-1 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-medium mb-2" style={{ color: "#236397" }}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="^[a-zA-Z0-9._%+-]+@akgec\.ac\.in$"
              title="Email must be in the format abc@akgec.ac.in"
              placeholder="abc@akgec.ac.in"
              className="w-full p-1 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block font-medium mb-2" style={{ color: "#236397" }}>
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  required
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
                />
                <span>Other's</span>
              </label>
            </div>
          </div>
          {/* Branch and Year */}
          <div className="flex flex-wrap gap-4">
            {[
              {
                name: "branch",
                label: "Branch",
                options: [
                  "CSIT",
                  "IT",
                  "CSE",
                  "CSE-hindi",
                  "CSE-DS",
                  "CSE-AIML",
                  "ECE",
                  "ME",
                  "Civil",
                ],
              },
              {
                name: "year",
                label: "Year",
                options: ["2nd Year", "3rd Year", "4th Year"],
              },
            ].map((field) => (
              <div className="flex-1 mb-4" key={field.name}>
                <label
                  className="block font-medium mb-2"
                  style={{ color: "#236397" }}
                >
                  {field.label} <span className="text-red-500">*</span>
                </label>
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full p-1 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2" style={{ color: "#236397" }}>
              HackerID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="hackerid"
              value={formData.hackerid}
              onChange={handleChange}
              required
              placeholder="Enter your HackerID"
              className="w-full p-1 border-2 border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg hover:scale-105"
            } transition-transform duration-300`}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
