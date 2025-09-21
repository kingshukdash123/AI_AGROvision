import { useState } from "react";
import { motion } from "framer-motion";

export default function GetStarted() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#a4e7bc] via-green-200 to-[#ffffff] px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-8 w-full max-w-md border border-green-300"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-green-900 text-center mb-6">
          {isLogin ? "Welcome Back 👋" : "Create Your Account 🌱"}
        </h2>

        {/* LOGIN FORM */}
        {isLogin ? (
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-400 to-green-500 text-white py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition"
            >
              Login
            </motion.button>
          </form>
        ) : (
          /* SIGNUP FORM */
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-400 to-green-500 text-white py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition"
            >
              Sign Up
            </motion.button>
          </form>
        )}

        {/* SWITCH PAGE */}
        <div className="text-center mt-6 text-green-700">
          {isLogin ? (
            <p>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-green-900 font-semibold hover:underline"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-green-900 font-semibold hover:underline"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
}
