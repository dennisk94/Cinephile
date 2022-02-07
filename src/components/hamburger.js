function hamburger( { showHide, checkNav } ) {

    function toggleClass(e) {
        if ( window.innerWidth < 600 ) {
            showHide();
        }
    }

  return (

    <div onClick={ toggleClass } className={ checkNav ? 'hamburger is-active' : 'hamburger' } id="hamburger-1">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
    </div>
  )
}

export default hamburger;
