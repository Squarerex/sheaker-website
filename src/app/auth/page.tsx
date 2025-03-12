"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect the user to /login
    router.push("/auth/login");
  }, [router]);

  return null; 
};

export default RedirectPage;
