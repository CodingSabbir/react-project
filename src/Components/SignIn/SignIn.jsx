


import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase';
import { NavLink } from 'react-router-dom';
import Facebook from '../Facebook/Facebook';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const messageDiv=document.querySelector('.messageDiv')
    if (error) {
        messageDiv.innerHTML=error
      }
      if (loading) {
        messageDiv.innerHTML='Loading...';
      }
      if (user) {
        messageDiv.innerHTML='Sign in successfully'
      }


    return (
        <div>
            <div className="mt-20 container mx-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" name="email" id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com" required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" name="password" id="password" placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>

                    <div className='messageDiv'></div>
                    
                    <NavLink to={'/login'}>
                    <a href="#"
                        className=" text-blue-500  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
                     <span className='text-black'>New user? </span>   Reg
                    </a>
                </NavLink>

                    <button onClick={()=>signInWithEmailAndPassword(email,password)} type="button" className="w-full text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800">
                        Sign in
                    </button>

                    <div className='flex justify-center gap-3'>
                        <div className='w-[50%] h-[2px] bg-slate-500 mt-3'></div>
                        <p className='font-mono font-semibold'>Or</p>
                        <div className='w-[50%] h-[2px] bg-slate-500 mt-3'></div>
                    </div>
                    <Facebook/>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
