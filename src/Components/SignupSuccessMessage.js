import React, { useEffect } from 'react';

const SignupSuccessMessage = ({message}) => {

  return (
    <div className="bg-green-500 text-white p-4 rounded-md">
      <p>{message}</p>
    </div>
  );
};

export default SignupSuccessMessage;
