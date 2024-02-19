import { AiFillGoogleCircle } from "react-icons/ai";
import footer from './footer.module.css'
export default function Footer(){
    const style = { color: "lightblue", fontSize: "1.5em" }
    return<>
    
    <div className={footer.sitefooter}>
    
        <p><AiFillGoogleCircle style={style} /> 2023 Alshaimaa's Portfolio. All rights reserved.</p>
    </div>

    </>
}