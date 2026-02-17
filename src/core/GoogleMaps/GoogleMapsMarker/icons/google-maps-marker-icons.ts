export const defaultMarkerIcon = (value: number | string, color: string) => {
  return `
    <svg width="29" height="40" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M28.5 19.5195C28.5 29.9185 15.8481 39.5195 14.5 39.5195C13.1519 39.5195 0.5 29.9185 0.5 19.5195H28.5Z"
        style="fill: ${color}; transition: 0.2s all;"
      />
      <rect x="0.5" y="4.51953" width="28" height="28" rx="14" style="fill: ${color}; transition: 250ms all;" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Roboto, sans-serif" font-style="normal" font-size="14px" font-weight="700" >
        ${value}
      </text>
    </svg>
  `;
};

export const defaultGoogleMarker = () => {
  return `
 <svg width="38" height="56" viewBox="0 0 38 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0002 56C19.0002 56 0.800049 29.6863 0.800049 19.1242C0.800049 8.56208 8.94856 0 19.0002 0C29.0515 0 37.2001 8.56208 37.2001 19.1242C37.2001 29.6863 19.0002 56 19.0002 56Z" fill="#F44034"/>
<path d="M27.3068 18.6754C27.3068 23.3146 23.546 27.0754 18.9068 27.0754C14.2676 27.0754 10.5068 23.3146 10.5068 18.6754C10.5068 14.0362 14.2676 10.2754 18.9068 10.2754C23.546 10.2754 27.3068 14.0362 27.3068 18.6754Z" fill="#6F0D06"/>
</svg>
`;
};

export const circleMarker = () => {
  return `
<svg width="73" height="74" viewBox="0 0 73 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="0.5" width="71" height="71" rx="35.5" fill="white" fill-opacity="0.5"/>
<g filter="url(#filter0_ddd_28785_32363)">
<rect x="30.5" y="30" width="12" height="12" rx="6" fill="#0062FF"/>
<rect x="31" y="30.5" width="11" height="11" rx="5.5" stroke="blue"/>
</g>
<rect x="1" y="0.5" width="71" height="71" rx="35.5" stroke="#0062FF"/>
<defs>
<filter id="filter0_ddd_28785_32363" x="6.5" y="14" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="8"/>
<feGaussianBlur stdDeviation="12"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.0196078 0 0 0 0 0.0235294 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_28785_32363"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="4"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.0196078 0 0 0 0 0.0235294 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_28785_32363" result="effect2_dropShadow_28785_32363"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.0196078 0 0 0 0 0.0235294 0 0 0 0.03 0"/>
<feBlend mode="normal" in2="effect2_dropShadow_28785_32363" result="effect3_dropShadow_28785_32363"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_28785_32363" result="shape"/>
</filter>
</defs>
</svg>
`;
};
