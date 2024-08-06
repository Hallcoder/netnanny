import { useState } from "react";
import "./index.css";
import heroImage from "./assets/undraw_programming_re_kg9v.svg"; // Add your own hero image
import { FaShieldAlt, FaBell, FaLock } from "react-icons/fa";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./config/firebase";

function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Add email to Firestore
      await addDoc(collection(db, 'waitlist'), { email });
      setSubmitted(true);
      setEmail(''); // Clear the input field
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  return (
    <div className="flex flex-row items-center min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="flex flex-row">
        <header className="flex flex-col items-center justify-center w-8/12 bg-gradient-to-r from-slate-400 to-orange-300 text-white text-center py-16 px-4 ">
          <img
            src={heroImage}
            alt="Hero"
            className="w-3/4 max-w-md mx-auto mb-4 rounded-lg shadow-lg"
          />
          <h1 className="text-3xl my-2 font-bold leading-tight">
            Get an accountability partner for your online activity
          </h1>
          <p className="text-lg max-w-xl">
            Struggling with distractions online? Our extension helps you stay
            focused and accountable.
          </p>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
          <section className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              How It Works
            </h2>
            <p className="mt-2 text-gray-600">
              <strong className="font-semibold italic">NetNanny</strong>{" "}
              monitors your browsing activity and notifies a trusted partner
              whenever you visit a blacklisted site, helping you maintain focus
              and break free from distractions.
            </p>
          </section>

          {/* Features */}
          <section className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Features & Benefits
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md">
                <FaShieldAlt className="text-blue-500 text-5xl mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Customizable Blacklists
                  </h3>
                  <p className="text-gray-600">
                    Easily create and manage a list of websites you want to
                    avoid.
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md">
                <FaBell className="text-yellow-500 text-5xl mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Instant Notifications
                  </h3>
                  <p className="text-gray-600">
                    Automatically send notifications to a designated partner
                    when a blacklisted site is visited.
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md">
                <FaLock className="text-green-500 text-5xl mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Privacy-Focused
                  </h3>
                  <p className="text-gray-600">
                    We respect your privacy—your browsing data is never stored
                    or shared.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Join Waiting List */}
          <section className="text-center bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">
              Join Our Waiting List
            </h2>
            <p className="mt-2 text-gray-600">
              Be the first to try{" "}
              <strong className="font-semibold italic">NetNanny</strong>. Sign
              up now to get early access and start your journey towards a
              distraction-free life!
            </p>

            {submitted ? (
              <p className="mt-4 text-green-600">
                Thank you for joining the waitlist!
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-4 flex flex-col sm:flex-row items-center justify-center"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 mb-4 sm:mb-0 sm:mr-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Join the Waitlist
                </button>
              </form>
            )}
          </section>
      <footer className="text-gray-600 text-center mt-8">
        © 2024 NetNanny. All rights reserved.
      </footer>
        </main>
      </div>
      {/* Footer */}
    </div>
  );
}

export default App;
