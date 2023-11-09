// import React from 'react';
// import React, { useState } from 'react';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import auth from '../Firebase/Firebase';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [ createUserWithEmailAndPassword  ] = useCreateUserWithEmailAndPassword(auth);
       
        
    
// return (
// <div>
//     <div
//         className=" mt-20 container mx-auto  w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
//         <form className="space-y-6" action="#">
//             <h5 className="text-xl font-medium text-gray-900 dark:text-white">Reg in to our platform</h5>
//             <div>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
//                     email</label>
//                 <input 
//                  value={email}
//                  onChange={(e) => setEmail(e.target.value)}
//                  type="email" name="email" id="email"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                     placeholder="name@company.com" required />
//             </div>
//             <div>
//                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
//                     password</label>
//                 <input
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
//                     required />
//             </div>

//             <div className='messageDiv'></div>
//             <a href="#" class="block py-2 pl-3 pr-4  text-blue-700 rounded md:bg-transparent md:p-0 "
//                 aria-current="page"> Sign in </a>

//             <button onClick={() => createUserWithEmailAndPassword(email, password)} type="button"
//                 className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                Submit
//             </button>



//             <div className='flex justify-center gap-3'>
//                 <div className='w-[50%] h-[2px] bg-slate-500 mt-3'></div>
//                 <p className='font-mono font-semibold'>Or</p>
//                 <div className='w-[50%] h-[2px] bg-slate-500 mt-3'></div>
//             </div>


//         </form>
//     </div>
// </div>
// );
// };

// export default Login;



import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'; // Use the appropriate hook for login
import auth from '../Firebase/Firebase';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

        const messageDiv=document.querySelector('.messageDiv')

        if (error) {
            messageDiv.innerHTML=error
          }
          if (loading) {
            messageDiv.innerHTML='Loading...'
          }
          if (user) {
            messageDiv.innerHTML='Login successfull'
          }

    const handleLogin = () => {
        createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Handle successful login, if needed
            })
            .catch((error) => {
                // Handle login error, if needed
            });
    };

    return (
        <div>
            <div className="mt-20 container mx-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Reg in to our platform</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" name="email" id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" name="password" id="password" placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required />
                    </div>

                    <div className='messageDiv'></div>
                    
                    <NavLink to={'/signIn'} >
                    <a href="#"
                        className=" text-blue-500  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                        Sign in
                    </a>
                </NavLink>

                    <button onClick={handleLogin} type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Regester
                    </button>

                    <div className='flex justify-center gap-3'>
                        <div className='w-[50%] h-[2px] bg-slate-500 mt-3'></div>
                        <p className='font-mono font-semibold'>Or</p>
                        <div className='w-[50%] h-[2px] bg-slate-500 mt-3'></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

