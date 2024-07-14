import React from "react";
import logo from "../assets/logo.png";

const GoogleForm = () => {
  return (
    <div className="bg-gradient-to-br from-purple-700 to-blue-700 min-h-screen flex justify-center items-center">
      <div className="bg-pink-100 w-full max-w-md p-8 rounded-lg shadow-lg">
        <div className="logo-container mb-6">
          <img src={logo} alt="CyberWave Lohg" />
        </div>
        <h2 className="mb-4 text-2xl font-bold text-black">CyberWave - Get a Chance to Internship</h2>
        <p className="mb-4 text-lg text-black">
          This is a 4 Week Virtual Internship Program opportunity from CyberWave.
        </p>
        <p className="mb-4 text-black">
          Perks you will receive are:
        </p>
        <ul className="mb-4 list-disc list-inside text-black">
          <li>Offer Letter</li>
          <li>Cyber-Goodies</li>
          <li>Internship Certificate</li>
          <li>Letter of recommendation based on Performance</li>
        </ul>
        <p className="mb-4 font-semibold text-black">
          How can I register for this Internship Program?
        </p>
        <p className="mb-8 text-black">
          Fill up the form and Internship Offer Letter will be released within 24-48 hours.
        </p>

        <form id="internshipForm" className="mb-8">
          <div className="mb-4">
            <label htmlFor="fullName" className="block font-semibold mb-2 text-black">Full Name:</label>
            <input type="text" className="border rounded-md py-2 px-3 w-full bg-white text-black" id="fullName" name="fullName" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2 text-black">Email:</label>
            <input type="email" className="border rounded-md py-2 px-3 w-full bg-white text-black" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block font-semibold mb-2 text-black">Gender:</label>
            <select className="border rounded-md py-2 px-3 w-full bg-white text-black" id="gender" name="gender" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="specialization" className="block font-semibold mb-2 text-black">Preferred Internship Domain:</label>
            <select className="border rounded-md py-2 px-3 w-full bg-white text-black" id="specialization" name="specialization" required>
              <option value="web-development">Web Development</option>
              <option value="android-development">Android Development</option>
              <option value="data-science">Data Science</option>
              <option value="java-programming">Java Programming</option>
              <option value="dsa-cpp-programming">DSA (C++ Programming)</option>
              <option value="python-programming">Python Programming</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="artificial-intelligence">Artificial Intelligence</option>
              <option value="machine-learning">Machine Learning</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="certificateType" className="block font-semibold mb-2 text-black">Certificate Type:</label>
            <div className="flex items-center">
              <input className="form-check-input border rounded-md py-2 px-3 mr-2" type="radio" name="certificateType" id="goldCertificate" value="gold" defaultChecked />
              <label className="form-check-label text-black" htmlFor="goldCertificate">Gold</label>
            </div>
            <div className="flex items-center">
              <input className="form-check-input border rounded-md py-2 px-3 mr-2" type="radio" name="certificateType" id="silverCertificate" value="silver" />
              <label className="form-check-label text-black" htmlFor="silverCertificate">Silver</label>
            </div>
            <div className="flex items-center">
              <input className="form-check-input border rounded-md py-2 px-3 mr-2" type="radio" name="certificateType" id="bronzeCertificate" value="bronze" />
              <label className="form-check-label text-black" htmlFor="bronzeCertificate">Bronze</label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="college" className="block font-semibold mb-2 text-black">College:</label>
            <input type="text" className="border rounded-md py-2 px-3 w-full bg-white text-black" id="college" name="college" required />
          </div>
          <div className="mb-4">
            <label htmlFor="contactNo" className="block font-semibold mb-2 text-black">Contact No.:</label>
            <input type="tel" className="border rounded-md py-2 px-3 w-full bg-white text-black" id="contactNo" name="contactNo" required />
          </div>
          <div className="mb-4">
            <label htmlFor="whatsappNo" className="block font-semibold mb-2 text-black">WhatsApp Number:</label>
            <input type="tel" className="border rounded-md py-2 px-3 w-full bg-white text-black" id="whatsappNo" name="whatsappNo" required />
          </div>
          <div className="mb-4">
            <label htmlFor="academicQualification" className="block font-semibold mb-2 text-black">Highest Academic Qualification:</label>
            <input type="text" className="border rounded-md py-2 px-3 w-full bg-white text-black" id="academicQualification" name="academicQualification" required />
          </div>
          <div className="mb-4">
            <label htmlFor="currentYear" className="block font-semibold mb-2 text-black">Current Year (Education):</label>
            <input type="text" className="border rounded-md py-2 px-3 w-full bg-white text-black" id="currentYear" name="currentYear" required />
          </div>
          <div className="mb-4">
            <label htmlFor="learnAboutCyberWave" className="block font-semibold mb-2 text-black">Where did you learn about CyberWave?</label>
            <select className="border rounded-md py-2 px-3 w-full bg-white text-black" id="learnAboutCyberWave" name="learnAboutCyberWave" required>
              <option value="social-media">Social Media (LinkedIn, Instagram, etc.)</option>
              <option value="referral">Referral (Friends, Colleagues, Relatives, etc.)</option>
              <option value="campus-placement">Campus Placement Cell/Coordinators</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="yes" id="joinTelegramLinkedIn" name="joinTelegramLinkedIn" required />
              <label className="form-check-label text-black" htmlFor="joinTelegramLinkedIn">
                I have joined the Telegram and LinkedIn communities.
              </label>
            </div>
          </div>
          <div className="mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="yes" id="termsAndConditions" name="termsAndConditions" required />
              <label className="form-check-label text-black" htmlFor="termsAndConditions">
                I have understood the internship details and hereby acknowledge and accept the terms and conditions of CyberWave Internship Program.
              </label>
            </div>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GoogleForm;
