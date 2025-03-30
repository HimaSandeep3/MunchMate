import React from "react";
// import User from '../assets/images/Sandeep.jpeg';
const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 xl:p-10 mt-10">
      <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
      <p className="text-lg mb-6">
        We'd love to hear from you. Whether you have a question, a suggestion,
        or just want to say hello, please don't hesitate to reach out.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Contact Information</h2>
          <ul>
            <li className="mb-2">
              <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:sandeepvartha27@gmail.com"
                className="text-blue-600 hover:text-blue-800"
              >
                sandeepvartha27@gmail.com
              </a>
            </li>
            <li className="mb-2">
              <span className="font-bold">Phone:</span>{" "}
              <a
                href="tel:+917075079575"
                className="text-blue-600 hover:text-blue-800"
              >
                +917075079575
              </a>
            </li>
            <li className="mb-2">
              <span className="font-bold">Address:</span> Pedana,Krishna
              District,Andhra Pradesh
            </li>
          </ul>
        </div>
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Social Media</h2>
          <ul>
            <li className="mb-2">
              <a
                href="https://github.com/HimaSandeep3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                GitHub
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://www.linkedin.com/in/sandeep-vartha-aa1527244/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded shadow-md p-4">
          <div className="flex flex-col items-center mb-4">
            <img
              src="https://github.com/HimaSandeep3.png"
              alt="Your Picture"
              className="w-40 h-40 rounded-2xl mb-2"
            />
            <h2 className="text-lg font-bold mb-2">About Me</h2>
          </div>
          <p className="text-gray-700 text-sm mb-4">
            Results-driven .NET and React Developer with 2.5+ years of experience
            in designing, developing, and maintaining web applications.
          </p>
          <p className="text-gray-700 text-sm mb-4">
            Skilled in both front-end and back-end technologies, with a strong
            focus on .NET framework and JavaScript.
          </p>
          <p className="text-gray-700 text-sm mb-4">
            Proficient in SQL, including the creation of stored procedures,
            table design, and database management.
          </p>
          <p className="text-gray-700 text-sm mb-4">
            Experienced with ReactJS for front-end development, and committed to
            delivering efficient, scalable, and user-friendly solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
