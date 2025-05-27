import React from "react";

export default function LoginPage({ loginWith, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">Welcome to Todo App</h1>
      <p className="text-center text-gray-500">Sign in to manage your tasks</p>
      <div className="space-y-4">
        <button
          className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition duration-300 ease-in-out"
          onClick={() => loginWith(new GoogleAuthProvider())}
        >
          {/* Google Icon SVG */}
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.02.68-2.33 1.09-3.71 1.09-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C4.01 20.07 7.79 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.79 1 4.01 3.93 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign in with Google
        </button>
        <button
          className="w-full flex items-center justify-center bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-900 transition duration-300 ease-in-out"
          onClick={() => loginWith(new GithubAuthProvider())}
        >
          {/* GitHub Icon */}
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.61-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.564 9.564 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.67.94.67 1.89v2.8c0 .27.18.58.69.48A10.007 10.007 0 0022 12c0-5.52-4.48-10-10-10z"/>
          </svg>
          Sign in with GitHub
        </button>
        <button
          className="w-full flex items-center justify-center bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          onClick={() => loginWith(new FacebookAuthProvider())}
        >
          {/* Facebook Icon */}
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.98h-2.54v-2.9h2.54v-2.21c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.9h-2.33v6.98A10.01 10.01 0 0022 12z"/>
          </svg>
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
}
