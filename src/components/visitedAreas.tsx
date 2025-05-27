"use client";
import React from "react";
import { useVisitedAreas } from "../hooks/useVisitedAreas";
import { AnimatedAreas } from "@/app/areas/animatedAreas";
import { Chip } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

const VisitedAreas: React.FC = () => {
  const { visitedAreas, clearVisitedAreas } = useVisitedAreas();

  return (
    <>
      <AnimatedAreas
        showEmptyIndicator={false}
        showSearch={false}
        areas={visitedAreas}
      />
      {visitedAreas.length > 0 && (
        <Chip
          onClick={clearVisitedAreas}
          icon={<IconX size={16} />}
          color="red"
          variant="light"
          defaultChecked
        >
          Clear history
        </Chip>
      )}
    </>
  );
};

export default VisitedAreas;
