import './styles.css';

const Tip = ({tipPercent, getTipPercent}) => {
    return (
        <div className="tip">
            <button name="no tip" onClick={() => getTipPercent(0)}>No tip</button>
            <button name="5%" onClick={() => getTipPercent(5)}>5%</button>
            <button name="10%" onClick={() => getTipPercent(10)}>10%</button>
            <button name="15%" onClick={() => getTipPercent(15)}>15%</button>
            <button name="20%" onClick={() => getTipPercent(20)}>20%</button>
            <button name="25%" onClick={() => getTipPercent(25)}>25%</button>
            <button name="50%" onClick={() => getTipPercent(50)}>50%</button>
            <input name="custom tip"  onChange={e =>
                getTipPercent(e.target.value)} value={tipPercent} placeholder="Custom %"/>
        </div>
    )
}

export default Tip