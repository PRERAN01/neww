function Comp1(props){
    return <div className="main">
        <div className="con1">
            <img src="/images/dice.png" alt="" />
            <div className="b1">
                <h1>DICE GAME</h1>
                <button onClick={props.toggle}>PLAY NOW</button>
            </div>
        </div>
    </div>
}
export default Comp1