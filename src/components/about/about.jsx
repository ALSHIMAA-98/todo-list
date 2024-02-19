import React from 'react'
import aboutS from'./about.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function About(){
    return<>
<header className={aboutS.bg}>
        <div className={aboutS.overlay}>
          <header style={{ padding: '128px 16px' }} id="home">
            <h1><b>ALshaimaa</b></h1>
            <button className={aboutS.b}>more info</button>
            <p style={{ color: 'gray', fontWeight: 'bold' }}>Web developer.</p>
          </header>
        </div>
      </header>

      
    </>
}