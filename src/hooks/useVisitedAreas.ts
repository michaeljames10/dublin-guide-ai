"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const COOKIE_KEY = "visited_areas";

export function useVisitedAreas() {
  const [visitedAreas, setVisitedAreas] = useState<string[]>([]);

  useEffect(() => {
    const cookie = Cookies.get(COOKIE_KEY);
    if (cookie) {
      try {
        const parsed = JSON.parse(cookie);
        if (Array.isArray(parsed)) {
          setVisitedAreas(parsed);
        }
      } catch {
        setVisitedAreas([]);
      }
    }
  }, []);

  const clearVisitedAreas = () => {
    Cookies.remove(COOKIE_KEY);
    setVisitedAreas([]);
  };

  return { visitedAreas, clearVisitedAreas };
}
