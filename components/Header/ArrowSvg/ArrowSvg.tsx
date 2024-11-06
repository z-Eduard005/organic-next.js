type ArrowProps = {
  stroke?: string;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

export default function ArrowSvg({
  stroke = "#274C5B",
  className = "",
  ...props
}: ArrowProps) {
  return (
    <div className="relative w-2">
      <svg
        {...props}
        className={`absolute top-1/2 -mt-[0.1875rem] ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="6"
        viewBox="0 0 8 6"
        fill="none"
        aria-label="arrow"
        aria-hidden="true"
      >
        <path
          d="M0.791016 1.5L3.79102 4.5L6.79102 1.5"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
