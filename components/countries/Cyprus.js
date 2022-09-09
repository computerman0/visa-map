import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Cyprus = () => {

    const { cyprusColor } = useContext(ColorContext)

return (
<g className={'cyprus'}>
    <style jsx>{`
    .cyprus {
    fill: ${cyprusColor};
    stroke-width: 1;
    }
    `}</style>
<path d="M 1168.2 276.7 1168.3 276.9 1168.6 277.3 1168.2 277.2 1167.9 277.2 1167.5 277.4 1167.2 277.1 1167.2 276.8 1167.5 276.7 1167.7 276.8 1168.2 276.7 Z" />
<path d="M 1166.5 277.2 1166.5 277.3 1166.3 277.5 1166.2 278.1 1166.1 278.3 1165.8 278.3 1165.6 278.5 1165.1 278.7 1164.9 278.8 1164.3 279.1 1163.9 279 1163.4 279.1 1163.1 279.5 1162.9 279.2 1162.6 279.3 1162.4 279.3 1162.1 279 1161.7 279.3 1161.2 279.3 1160.7 279.1 1160.2 279 1159.8 278.7 1159.5 278.1 1159.2 277.8 1159 277.1 1158.8 276.8 1158.9 276.5 1159.4 276.8 1159.8 276.7 1160 276.4 1160.1 276.1 1160.4 276 1160.6 276.1 1160.8 275.9 1161 275.9 1161.1 276.3 1161.6 276.5 1161.7 276.7 1162.3 276.7 1162.9 276.2 1163.3 276.3 1163.6 276.1 1163.9 276.2 1164.3 276.4 1164.5 276.1 1164.8 276.1 1165.1 276.5 1165.1 277.1 1165.4 276.9 1165.7 277.1 1165.8 277 1166.5 277.2 Z" />
<circle r="5" cy="500" cx="560" stroke="black"/>
</g>
)
}

export default memo(Cyprus)