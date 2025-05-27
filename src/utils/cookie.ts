import Cookies from "js-cookie";

const COOKIE_KEY = "visited_areas";

export function getVisitedAreas(): string[] {
  const cookie = Cookies.get(COOKIE_KEY);
  return cookie ? JSON.parse(cookie) : [];
}

export function addVisitedArea(areaId: string) {
  const current = getVisitedAreas();
  if (!current.includes(areaId)) {
    const updated = [...current, areaId];
    Cookies.set(COOKIE_KEY, JSON.stringify(updated), { expires: 30 }); // Expires in 30 days
  }
}

export function clearVisitedAreas() {
  Cookies.remove(COOKIE_KEY);
}
