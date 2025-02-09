

function Roll({rando,handeldice,sound}){
    
    
    function abc(){
        sound();
        handeldice();
    }
    return <div className="dice">
        <img  onClick={abc}src={`/images/dice_${rando}.png`} alt="" />
        <h2>CLICK ON DICE  TO ROLL DICE</h2>
    </div>
}
export default Roll