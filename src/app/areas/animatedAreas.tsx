"use client";

import { addVisitedArea } from "@/utils/cookie";
import { Autocomplete, Transition, Text, Badge } from "@mantine/core";
import { useEffect, useState } from "react";

export function AnimatedAreas({
  areas,
  showSearch,
  showEmptyIndicator = true,
}: {
  areas: string[];
  showSearch?: boolean;
  showEmptyIndicator?: boolean;
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredAreas =
    search.length > 1
      ? areas.filter((area) =>
          area.toLowerCase().includes(search.toLowerCase())
        )
      : areas;

  return (
    <>
      {showSearch && (
        <Autocomplete
          size="lg"
          radius="xl"
          description="find an area by name"
          placeholder="Search for an area..."
          data={areas}
          value={search}
          onChange={(e) => {
            setSearch(e);
          }}
        />
      )}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginTop: "1rem",
        }}
      >
        {filteredAreas.map((area, index) => (
          <Transition
            mounted={isMounted}
            transition="skew-up"
            duration={400}
            enterDelay={index === 0 ? 0 : index * 75}
            timingFunction="ease"
            key={index}
          >
            {() => (
              <Badge
                size="lg"
                variant="dot"
                gradient={{ from: "#000", to: "#2e2e2e", deg: 45 }}
                onClick={() => {
                  addVisitedArea(area);
                  window.location.href = `/areas/${area}`;
                }}
                style={{
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
              >
                {area}
              </Badge>
            )}
          </Transition>
        ))}
      </div>

      {showEmptyIndicator && filteredAreas.length === 0 && (
        <Text size="md">No matching area found</Text>
      )}
    </>
  );
}
