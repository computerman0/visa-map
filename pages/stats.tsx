import StatsPassport from '../components/Stats/StatsPassport';
import ProgressBar from '../components/ProgressBar';
import styles from '../styles/Stats.module.css';
interface Props {
  selectArray:null | string[];
  percentage:any;
}
const horizontalColumn:number[] = [0,1,2,3,4,5,6,7,8,9]
const verticalColumn:number[] = [0,1,2,3,4]
const verticalColumnText:string[] = ['Total', 'Visa-free', 'Visa on arrival/E-visa','Visa on arrival', 'E-visa']
const verticalColumnSelection:string[] = ['total', 'visaFree', 'visaOnArrivalEVisa', 'visaOnArrival', 'eVisa']
const verticalColumnRGB:string[] = ['rgb(255,255,255)', 'rgb(50,205,50)', 'rgb(161,224,123)', 'rgb(255,255,92)', 'rgb(135,206,250)']

const Stats:React.FC<Props> = ({ selectArray, percentage }) => {

  const renderPassports = (horizontalColumn: number[]) => {
    return horizontalColumn.map(horizontalColumn => <td key={horizontalColumn}><StatsPassport selectArray={selectArray} horizontalColumn={horizontalColumn}/></td>)
  }

  const renderTables = (verticalColumn:number[], horizontalColumn:number[]) => {
    return verticalColumn.map(verticalColumn => 
    <tr key={verticalColumn} className={styles.subRow}>
      <td className={styles.cell}>
        <p className={styles.text}>{verticalColumnText[verticalColumn]}</p>
      </td>
      {horizontalColumn.map(horizontalColumn =>
        (selectArray[horizontalColumn] != null) ? (
        <td className={styles.cell}>
        <ProgressBar percentage={percentage[horizontalColumn][verticalColumnSelection[verticalColumn]]} verticalColumn={verticalColumn} width={'75px'} height={'75px'} color={verticalColumnRGB[verticalColumn]} />
        </td>
        ) : (
          <td className={styles.cell}></td>
        )
      )}
    </tr>
    )
  }

  return (
    <>
    <br />
    <br />
    <br />
    <div className={styles.container}>
    <table cellSpacing="0" cellPadding="0">
			<tbody>
        <tr>
          <th></th>
          {renderPassports(horizontalColumn)}
        </tr>
          {renderTables(verticalColumn, horizontalColumn)}
			</tbody>
    </table>
    </div>
    </>
  )
}

export default Stats