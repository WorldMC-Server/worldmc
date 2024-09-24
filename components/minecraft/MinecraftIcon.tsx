"use client";

import React, { useRef, useEffect, useMemo } from "react";
import { MinecraftAssetType, getAssetPath, getAssetEnum } from "@/lib/minecraft/MinecraftEnums";

interface MinecraftIconProps {
  assetType: MinecraftAssetType | string;
  className?: string;
}

const MinecraftIcon: React.FC<MinecraftIconProps> = React.memo(({ assetType, className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const memoizedEffect = useMemo(() => {
    return () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.imageSmoothingEnabled = false;

        ctx.drawImage(img, 0, 0, img.width, img.height);
      };
      const enumAssetType = getAssetEnum(assetType);
      img.src = getAssetPath(enumAssetType);
    };
  }, [assetType]);

  useEffect(() => {
    memoizedEffect();
  }, [memoizedEffect]);

  return <canvas ref={canvasRef} className={className} style={{ imageRendering: "pixelated" }} />;
});

MinecraftIcon.displayName = "MinecraftIcon";

export default MinecraftIcon;
