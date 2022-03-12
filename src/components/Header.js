const Header = ({pressButton}) => {
  return (
    <header>
      <button key="1" id="tab1" onClick={pressButton}>
        Tab 1
      </button>
      <button key="2" id="tab2" onClick={pressButton}>
        Tab 2
      </button>
      <button key="3" id="tab3" onClick={pressButton}>
        Tab 3
      </button>
    </header>
  )
}

export default Header
