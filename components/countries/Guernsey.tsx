import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'

const Guernsey:React.FC = () => {

  const { guernseyColor } = useContext(ColorContext)
  const { guernseyDiff } = useContext(DiffContext)

return (
<g className={'guernsey'}>
  <style jsx>{`
  .guernsey {
  fill: ${guernseyColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="af" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref="./gridvf.png"/>
  </pattern>
</defs>
{(guernseyDiff == 1) ?
<circle fill="url(#ao)" r="4" cy="185" cx="965" stroke="black"/>
:
<circle r="4" cy="185" cx="965" stroke="black"/>
}
</g>
)
}

export default Guernsey