"use client";

import { useState, useEffect, useCallback } from "react";

const AUTH_KEY = "cv-builder-auth";
const PASSWORD_HASH = "982945308d3682d16636fd628c314e293499e99c00120acd9b693f5ab16e1648"; // SHA-256 of "loki"

async function sha256(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function useAuth() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const flag = sessionStorage.getItem(AUTH_KEY);
    setAuthenticated(flag === "true");
  }, []);

  const login = useCallback(async (password: string) => {
    const hash = await sha256(password);
    if (hash === PASSWORD_HASH) {
      sessionStorage.setItem(AUTH_KEY, "true");
      setAuthenticated(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(AUTH_KEY);
    setAuthenticated(false);
  }, []);

  return { authenticated, login, logout };
}
