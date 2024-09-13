import React, { useContext } from 'react';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import { GoogleLogin } from '@react-oauth/google';

import { SocialLogin as SocialLoginProvider } from 'react-social-login';
import { AuthContext } from '../contexts/AuthContext';
interface SocialLoginData {
  provider: 'linkedin' | 'google' | 'twitter';
  data: any;
}

const SocialLogin: React.FC = () => {
  const {loggedInUser, setLoggedInUser} =  useContext(AuthContext);
  

  const handleLinkedInSuccess = (data: any) => {
    setLoggedInUser({
      provider: 'linkedin',
      data,
    });
  };

  const handleGoogleSuccess = (response: any) => {
    setLoggedInUser({
      provider: 'google',
      data: response,
    });
  };

  const handleTwitterSuccess = (response: any) => {
    setLoggedInUser({
      provider: 'twitter',
      data: response,
    });
  };

  const handleError = (error: any) => {
    console.error('Login Error:', error);
  };

  return (
    <div>
    {loggedInUser ? (
      <p>Welcome, {loggedInUser.data.name}!</p>
    ) : (
      // Render login buttons
      <div>
      <LinkedIn
        clientId="YOUR_LINKEDIN_CLIENT_ID"
        redirectUri="http://localhost:3000/callback"
        onSuccess={handleLinkedInSuccess}
        onError={handleError}
      >
        <button>Login with LinkedIn</button>
      </LinkedIn>

      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        onSuccess={handleGoogleSuccess}
        onFailure={handleError}
      >
        <button>Login with Google</button>
      </GoogleLogin>

      <SocialLoginProvider
        clientId="YOUR_TWITTER_CLIENT_ID"
        callbackUrl="http://localhost:3000/callback"
        onSuccess={handleTwitterSuccess}
        onFailure={handleError}
      >
        <button>Login with Twitter</button>
      </SocialLoginProvider>
    </div>
    )}
  </div>

  );
};

export default SocialLogin;