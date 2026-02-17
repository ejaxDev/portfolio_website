import React from "react";

export interface CodeSample {
  label: string
  description: string
  code: string
}
export interface ImageVariant {
  url: string;
  label: string;
}

export interface PlotData {
  title: string;
  description: React.ReactNode; // <-- allows JSX or string or any renderable React content
  imageUrl: string;
  imageUrls?: ImageVariant[]; // Optional array of images for navigation
}

export interface ProjectDemoData {
  id: string
  title: string
  description: string
  codeSamples: CodeSample[]
  plots?: PlotData[]
}

