import React from 'react'

export default props => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )

  return (
    <section className="LoginScreen" {...props}>
      <div id=".LoginScreen.Console">
        <img alt="E Corp Logo" className="Logo" src={require('../assets/logo.png')} />
        <h4>
          {isMobile ? 'T0uch t0 Pr34ch' : 'Cl1ck t0 Pr34ch'}
        </h4>
        <h5>sound enabled console</h5>
      </div>
    </section>
  )
}
