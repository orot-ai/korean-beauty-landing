interface ChevronLeftIconProps {
  className?: string;
}

export default function ChevronLeftIcon({ className = "w-5 h-5" }: ChevronLeftIconProps) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}