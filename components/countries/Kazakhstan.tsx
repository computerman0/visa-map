interface Props {
  kz:string;
  KZ:boolean;
  setCountrySelect:Function;
}

const Kazakhstan:React.FC<Props> = ({ kz, KZ, setCountrySelect }) => {
  return (
    <g className={'kazakhstan'} onMouseOver={() => setCountrySelect('kazakhstan')}>
      <style jsx>{`
      .kazakhstan {
        fill: ${kz};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="kz" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#kz)" />
    </defs>
    <path fill={KZ && "url(#kz)"} d="M1338.3 160.5l4.4-0.3 9.2-5.8-0.8 2 8.4 4.7 18.3 15.6 1.1-3.2 8.4 3.5 6.2-1.6 3.3 1.1 4.1 3.6 4 1.2 3.3 2.7 6-0.9 4.4 3.8-1.9 4.2-3.8 0.6 2.5 6.2-1.6 2.9-10.8-2.1 1 11.3-2 1.4-9.1 2.5 8.8 11-2.9 1.6 1.7 3.7-3.5-1-3.4-2.3-7.9-0.6-8.6-0.2-1.6 0.7-8.2-2.7-2.5 1.4 0.5 3.7-9.2-2.2-3.1 0.9-0.3 2.8-2.6 1.2-5.4 4.4-0.9 4.6-2 0-2.3-3-6.7-0.2-2.5-5.2-2.6-0.1-1.5-6.4-7.6-4.6-8.6 0.5-5.7 0.9-6.6-5.7-4.8-2.4-9.2-4.5-1.1-0.5-12 3.7 6.2 23.4-2.6 0.3-4.8-5-3.9-1.8-5.6 1.3-1.8 2.2-0.6-1.6 0.6-2.6-1.5-2.2-6.5-2.2-3.7-5.7-3.2-1.6-0.6-2.1 5.1 0.6-1-4.6 4.1-1 4.7 0.9-0.7-6.1-1.9-3.9-5 0.3-4.7-1.5-5.1 2.7-4.4 1.4-2.8-1.1-0.2-3.2-4.3-4.2-3.6 0.2-5.3-4.2 1.7-4.8-1.8-1.2 2.2-6.9 6 3.6-0.6-4.5 8.1-6.7 7.6-0.2 12 4.3 6.6 2.5 4.4-2.6 7.7-0.1 7.3 3.2 0.8-1.9 7 0.3 0.2-2.9-9.4-4.3 3.5-3-1.5-1.6 4-1.6-5.1-4.2 1.4-2.1 17-2.1 1.7-1.5 10.9-2.3 3.1-2.5 9.1 1.3 4.4 6.3 4.3-1.5 7.1 2.1 1.1 3.3z" stroke="black"/>
    </g>
  )
}

export default Kazakhstan