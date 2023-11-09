import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { useSignInWithFacebook  } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase';

const Facebook = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);
    console.log(user)
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p>User Sign in success</p>
          </div>
        );
      }
    return (
        <div>
            <div className='border-2 p-1 rounded-md text-center flex justify-center items-center gap-10 border-black'>
            <div><ImFacebook2/></div>
            <button onClick={()=>signInWithFacebook()} type='submit'> Continue With Facebook  </button>
        </div>
        </div>
    );
};

export default Facebook;