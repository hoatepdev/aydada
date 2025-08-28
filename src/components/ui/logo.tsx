const TechnovaLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 1024 1024"
    role="img"
    aria-label="Technova icon (SVG)"
    className="h-20 w-20"
    {...props}
  >
    <rect width="1024" height="1024" rx="160" ry="160" fill="#36D399" />
    <defs>
      <style>
        {`
          .stroke { stroke: #063642; stroke-width: 76; stroke-linecap: round; stroke-linejoin: round; fill: none; }
          .node-outer { fill: #063642; }
          .node-inner { fill: #36D399; }
        `}
      </style>
    </defs>
    <path className="stroke" d="M280 760 L280 520" />
    <path className="stroke" d="M280 520 L480 340" />
    <path className="stroke" d="M280 640 L620 520" />
    <path className="stroke" d="M460 700 L620 580" />
    <circle className="node-outer" cx="480" cy="340" r="68" />
    <circle className="node-inner" cx="480" cy="340" r="30" />
    <circle className="node-outer" cx="620" cy="520" r="68" />
    <circle className="node-inner" cx="620" cy="520" r="30" />
    <circle className="node-outer" cx="620" cy="580" r="54" />
    <circle className="node-inner" cx="620" cy="580" r="24" />
    <circle className="node-outer" cx="280" cy="520" r="44" />
    <circle className="node-inner" cx="280" cy="520" r="18" />
    <circle className="node-outer" cx="280" cy="640" r="48" />
    <circle className="node-inner" cx="280" cy="640" r="20" />
  </svg>
)

export default TechnovaLogo
