// import React, { useState } from "react";

// const Modal = ({ onClose, isLogin }) => {
//   return (
//     <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
//           aria-label="Close"
//         >
//           ✖
//         </button>

//         {/* Form content */}
//         {isLogin ? (
//           <LoginForm />
//         ) : (
//           <SignupForm />
//         )}
//       </div>
//     </div>
//   );
// };

// const LoginForm = () => {
//   return (
//     <form>
//       <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
//         Login
//       </h2>
//       <div className="mb-4">
//         <label
//           htmlFor="email"
//           className="block text-sm font-medium text-gray-700 mb-2"
//         >
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//           placeholder="Enter your email"
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           htmlFor="password"
//           className="block text-sm font-medium text-gray-700 mb-2"
//         >
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//           placeholder="Enter your password"
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition"
//       >
//         Login
//       </button>
//     </form>
//   );
// };

// const SignupForm = () => {
//   return (
//     <form>
//       <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
//         Signup
//       </h2>
//       <div className="mb-4">
//         <label
//           htmlFor="name"
//           className="block text-sm font-medium text-gray-700 mb-2"
//         >
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//           placeholder="Enter your name"
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           htmlFor="email"
//           className="block text-sm font-medium text-gray-700 mb-2"
//         >
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//           placeholder="Enter your email"
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           htmlFor="password"
//           className="block text-sm font-medium text-gray-700 mb-2"
//         >
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//           placeholder="Create a password"
//         />
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition"
//       >
//         Signup
//       </button>
//     </form>
//   );
// };

// const Navbar = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [isLogin, setIsLogin] = useState(true);

//   const openLogin = () => {
//     setIsLogin(true);
//     setShowModal(true);
//   };

//   const openSignup = () => {
//     setIsLogin(false);
//     setShowModal(true);
//   };

//   return (
//     <>
//       <div className="bg-gradient-to-r from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
//         <div className="container py-2">
//           <div className="flex justify-between items-center">
//             <div>
//               <a href="#" className="font-bold text-2xl sm:text-3xl">
//                 Coffee Cafe
//               </a>
//             </div>
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={openLogin}
//                 className="bg-primary text-white px-4 py-2 rounded-lg"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={openSignup}
//                 className="bg-primary text-white px-4 py-2 rounded-lg"
//               >
//                 Signup
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Show modal */}
//       {showModal && <Modal onClose={() => setShowModal(false)} isLogin={isLogin} />}
//     </>
//   );
// };

// export default Navbar;
