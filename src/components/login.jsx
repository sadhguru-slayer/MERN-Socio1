import React from 'react'
import { GoogleOAuthProvider ,  GoogleLogin} from '@react-oauth/google';
// import { } from '@react-oauth/google';
import { Await, useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import jwt_decode from "jwt-decode";
import { client } from '../client';


const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // const responseGoogle = (response) => {
  //   localStorage.setItem('user', JSON.stringify(response));
  //   const { name, googleId, imageUrl } = response;
  //   const doc = {
  //     _id: googleId,
  //     _type: 'user',
  //     userName: name,
  //     image: imageUrl,
  //   };
  //   client.createIfNotExists(doc).then(() => {
  //     navigate('/', { replace: true });
  //   });
  // };


  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full ">
        <video 
        src={shareVideo}
        type="video/mp4"
        Loop
        controls="false"
        muted
        autoPlay
        className='w-full h-full object-cover'
        />
      <div className="absolute flex flex-col justify-center items-center left-0 right-0 bottom-0 top-0 bg-blackOverlay">
        <div className="p-5">
          <img src={logo} alt="Logo" width="140px" />
        </div>
        <div className="shadow-2xl">
        <GoogleOAuthProvider clientId="814090656882-olip4pnfn8k54d6em07o2k4eljslrfh6.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
            var decoded = jwt_decode(credentialResponse.credential);
            console.log(decoded);
            localStorage.setItem('user', JSON.stringify(decoded));
            const { name, jti, picture } = decoded;
            const doc = {
                  _id: jti,
                  _type: 'user',
                  userName: name,
                  image: picture,
                };

                client.createIfNotExists(doc);
                navigate('/', { replace: true });

                // console.log(decoded);
                // console.log(doc);
                
              }}
              onError={() => {
                console.log('Login Failed');
                navigate('/', { replace: true });
          }}
        />;
        </GoogleOAuthProvider>;
        </div>
      </div>
      </div>
    </div>
  )
}

export default login