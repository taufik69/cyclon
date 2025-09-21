import React, { useState } from "react";

const ProductTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div>
      <div className="p-4">
        <ul className="w-max flex gap-2 relative before:absolute before:w-full before:bottom-0 before:border-b-2 before:border-gray-200">
          {/* Home Tab */}
          <li
            onClick={() => setActiveTab("home")}
            className={`tab relative text-[15px] text-center py-3 px-6 border-b-2 cursor-pointer transition-all 
            ${
              activeTab === "home"
                ? "text-blue-700 font-semibold bg-gray-50 border-blue-700"
                : "text-slate-600 font-medium border-gray-200 hover:text-blue-700"
            }`}
          >
            Home
          </li>

          {/* Content Tab */}
          <li
            onClick={() => setActiveTab("content")}
            className={`tab relative text-[15px] text-center py-3 px-6 border-b-2 cursor-pointer transition-all 
            ${
              activeTab === "content"
                ? "text-blue-700 font-semibold bg-gray-50 border-blue-700"
                : "text-slate-600 font-medium border-gray-200 hover:text-blue-700"
            }`}
          >
            Content
          </li>

          {/* Profile Tab */}
          <li
            onClick={() => setActiveTab("profile")}
            className={`tab relative text-[15px] text-center py-3 px-6 border-b-2 cursor-pointer transition-all 
            ${
              activeTab === "profile"
                ? "text-blue-700 font-semibold bg-gray-50 border-blue-700"
                : "text-slate-600 font-medium border-gray-200 hover:text-blue-700"
            }`}
          >
            Profile
          </li>
        </ul>

        {/* Tab Contents */}
        {activeTab === "home" && (
          <div className="tab-content max-w-2xl block mt-8">
            <h4 className="text-base font-semibold text-slate-900">
              Welcome to your dashboard
            </h4>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              This is your personal space where you can monitor activity, access
              important tools, and manage your account. Quickly view your recent
              projects, notifications, and updates all in one place. Stay
              productive by navigating through the tabs to explore content,
              manage your profile, or start something new.
            </p>
          </div>
        )}

        {activeTab === "content" && (
          <div className="tab-content max-w-2xl block mt-8">
            <h4 className="text-base font-semibold text-slate-900">
              Content Management
            </h4>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Here you can manage all your uploaded documents, posts, and
              drafts. You can create new entries, update existing content, or
              organize items using tags and folders. Everything is autosaved in
              real time, so you never lose your work. Need to collaborate?
              Invite team members and assign editing rights as needed.
            </p>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="tab-content max-w-2xl block mt-8">
            <h4 className="text-base font-semibold text-slate-900">
              Your Profile
            </h4>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              This section lets you update your personal information, manage
              your preferences, and customize your experience. Add a profile
              picture, change your display name, connect third-party accounts,
              or configure notification settings. Keeping your profile up to
              date ensures better collaboration and account security.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
