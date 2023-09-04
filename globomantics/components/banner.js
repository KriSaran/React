/* eslint-disable @next/next/no-img-element */
import styles from "./banner.module.css";

const subtitleStyle={
    fontStyle : "italic",
    fontSize : "x-large",
    color  : "Emeraldgreen",
};

const Banner = ({children}) => {
    return (
       <header className="row mb-4">
        <div className="col-5">
            <img src="./sample.png" alt="logo" className={styles.logo} />
        </div>
        <div className="col-7 mt-5" style={subtitleStyle} >
            {children}
         </div>
       </header>
    );
};

export default Banner;

