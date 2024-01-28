"use client";
// Navbar.tsx
import React, { useEffect, useState } from "react";
import { signInWithGoogle, auth } from "../lib/firebaseAuth";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user eee", user.displayName);

        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const router = useRouter();

  const handleSignIn = async () => {
    try {
      // Assume signInWithGoogle returns a promise
      await signInWithGoogle();

      // Redirect to /dashboard on successful authentication
      router.push("/dashboard");
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  const gotToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <nav className="absolute top-4 left-0 right-0 bg-transparent z-50 px-6 lg:px-0">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Navbar and Nav Links on the left */}
        <div className="flex items-center space-x-4">
          <div className="text-white bg-gray-600 py-1 px-4 rounded-full">
            Your Navbar
          </div>
          <div className="bg-gray-600 py-1 px-4 rounded-full hidden xs:block lg:block">
            <a href="#" className="text-white mr-4">
              About
            </a>
            <a href="#" className="text-white mr-4">
              Products
            </a>
            <a href="#" className="text-white mr-4">
              Newsletter
            </a>
          </div>
        </div>

        {/* Login and Cart Links on the right */}
        <div className="flex items-center space-x-4 bg-gray-600 py-1 px-4 rounded-full">
          {user ? (
            <button onClick={gotToDashboard} className="text-white">
              Dashboard
            </button>
          ) : (
            <button onClick={handleSignIn} className="text-white">
              Login
            </button>
          )}
          <a href="#" className="text-white">
            Cart
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
