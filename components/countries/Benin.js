import { memo, useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
const Benin = () => {

    const { beninColor } = useContext(ColorContext)

return (
<g className={'benin'}>
    <style jsx>{`
    .benin {
    fill: ${beninColor};
    }
    `}</style>
<path d="M1006.7 427l-0.2 2.1 1.3 3.8-1.1 2.6 0.6 1.7-2.8 4-1.7 2-1.1 4 0.2 4.1-0.3 10.3-4.7 0.8-1.4-4.4 0.3-14.8-1.2-1.3-0.2-3.2-2-2.2-1.7-1.9 0.7-3.4 2-0.7 1.1-2.8 2.8-0.6 1.2-1.9 1.9-1.9 2 0 4.3 3.7z" />
</g>
)
}

export default memo(Benin)