const VmlLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" {...props}>
    <path
      fill={props.fill ?? "currentColor"}
      d="M25.078.001 13.846 11.232 2.614.001H0v2.612l11.233 11.233L0 25.078v2.613h2.614L13.846 16.46l11.232 11.231h2.614v-2.613L16.46 13.846 27.692 2.613V.001Z"
    ></path>
    <g fill={props.fill ?? "currentColor"}>
      <path d="m16.267.001-2.421 2.42-2.421-2.42H6.376l7.47 7.469L21.315.001ZM6.376 27.692h5.048l2.421-2.421 2.421 2.421h5.048l-7.469-7.469ZM25.271 13.846l2.421-2.421V6.376l-7.469 7.47 7.469 7.469v-5.049ZM0 11.424l2.421 2.421L0 16.266v5.048l7.469-7.469L0 6.376Z"></path>
    </g>
  </svg>
);

export function RegistryLogo() {
  return (
    <>
      <div className="text-foreground flex-shrink-0 rounded-md p-1">
        <VmlLogo className="size-8" />
      </div>
      <span className="font-semibold">Registry</span>
    </>
  );
}
