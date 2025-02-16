"use client";

import DoctorProfileCard from "@/app/components/doctor-profile-card";
import dynamic from "next/dynamic";
import Script from "next/script";

// Import the DoctorMap with SSR disabled.
const DoctorMapNoSSR = dynamic(
  () => import("@/app/components/doctor-map"),
  { ssr: false }
);

export default function DoctorSearchPage() {
  return (
    <section className="min-h-screen bg-gray-100 p-4">
      {/* Load the Google Maps API */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}&libraries=places`}
        strategy="beforeInteractive"
      />

      {/* Wrapper container */}
      <div className=" max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Doctor Search</h1>

        {/* Flex container for the two columns */}
        <div className="flex lg:flex-row items-start justify-center gap-4">
          {/* Left Column: Doctor Card */}
          <div className="w-full">
            <DoctorProfileCard />
          </div>

          <div className="hidden xl:block">
            <DoctorMapNoSSR />
          </div>
        </div>
      </div>
    </section>
  );
}