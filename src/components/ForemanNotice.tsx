import React from "react";

const ForemanNotice: React.FC = () => {
  return (
    <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 p-4 rounded-lg mt-6">
      <h2 className="font-bold">Restricted Access</h2>
      <p>
        You are logged in as a Foreman. Your access is limited to view-only
        features. Please contact your manager for full permissions.
      </p>
    </div>
  );
};

export default ForemanNotice;
