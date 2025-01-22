import { Check, X } from 'lucide-react';


export 
const comparisonData = {
  title: "Reasons to GET us?",
  columns: [
    {
      title: "GET SUPPLEMENTS",
      bgColor: "bg-green-50",
      icon: Check,
      iconColor: "text-green-500",
      points: [
        "Tailored for young men, focusing on appearance and confidence.",
        "Supports both looks and performance in one package.",
        "Innovative formulas with effective, safe ingredients.",
        "Boosts confidence with real, visible results.",
        "Part of a personal journey to becoming your best self."
      ]
    },
    {
      title: "OTHER BRANDS",
      bgColor: "bg-red-50",
      icon: X,
      iconColor: "text-red-500",
      points: [
        "Created for generic audience, not tailored to specific needs.",
        "Only focuses on one area and not the whole picture.",
        "Uses outdated and less effective ingredients.",
        "Doesn't help to build confidence alongside results.",
        "Lacks a meaningful story or journey for users."
      ]
    }
  ]
};