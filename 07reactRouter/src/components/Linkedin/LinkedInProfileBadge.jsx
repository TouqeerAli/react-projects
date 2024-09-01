import React, { useEffect } from 'react';

function LinkedInProfileBadge() {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">My LinkedIn Profile</h1>
      <div className="badge-base LI-profile-badge"
           data-locale="en_US"
           data-size="large"
           data-theme="light"
           data-type="VERTICAL"
           data-vanity="iamtouqeerali"
           data-version="v1">
        <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/iamtouqeerali/"></a>
      </div>
    </div>
  );
}

export default LinkedInProfileBadge;
