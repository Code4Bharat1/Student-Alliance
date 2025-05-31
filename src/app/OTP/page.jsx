"use client";
import React, { Suspense } from "react";
import OTP from "../forgot-password/OTP";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <OTP/>
    </Suspense>
  );
};

export default Page;
