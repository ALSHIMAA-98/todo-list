
import portS from'./portfolio.module.css'
export default function Portfolio(props){
    return<>

    {/* <div style={{ textAlign: 'center' }}>
        <h2 className="porth">portfolio</h2>
      </div> */}
 <div className={portS.port}>
      
    <div className={portS.portcontent}>
        <div  className={portS.card1} style={{ backgroundColor: props.color }} >
          <p>{props.name}</p>
        </div>

        <div className={portS.card2} style={{ backgroundColor: props.color }}>
          <p>{props.name}</p>
        </div>

        <div className={portS.card1} style={{ backgroundColor: props.color }}>
          <p>{props.name}</p>
        </div>
      </div>
    </div>

    </>
}