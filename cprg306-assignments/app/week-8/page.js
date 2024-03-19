"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Pages from "./shopping-list/page.js";

// Create a functional component named Page
const Page = () => {
  // Use the useUserAuth hook to get user object and authentication functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Function to handle login button click
  const handleLoginClick = async () => {
    // Sign in to Firebase with GitHub authentication
    await gitHubSignIn();
  };

  // Function to handle logout button click
  const handleLogoutClick = async () => {
    // Sign out of Firebase
    await firebaseSignOut();
  };

  // Render different content based on user authentication status
  return (
    <div>
      <div>
        {user ? (
          <>
            <p className="text-2xl font-bold text-left">Welcome, {user.displayName} ({user.email})</p>
            <button onClick={handleLogoutClick} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Logout</button>
            
            <Pages/>
          </>
        ) : (
          <>
          <div className="flex flex-col items-center  text-center justify-center h-screen">
            <p className="text-2xl font-bold">Please login to continue.</p>
            <button onClick={handleLoginClick} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Login with GitHub</button>
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
