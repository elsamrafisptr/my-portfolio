import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Dashboard | Elsam Rafi Saputra`,
  description: `Software & AI Engineer Enthusiast`,
  openGraph: {
    title: `Dashboard | Elsam Rafi Saputra`,
    description: `Software & AI Engineer Enthusiast`,
    authors: `Elsam Rafi Saputra`,
  },
};

const Dashboard = () => {
  return (
    <main className="min-h-screen flex justify-center items-center">
      Dashboard Page is Under Maintenance
    </main>
  );
};

export default Dashboard;
