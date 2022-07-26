import './agent.css';

const Agent = (props) => {

    // const agentBtn = () => {
        
    // }

    const defaultBackground = `linear-gradient(to bottom right, #FD4556, #BD3944, #53212B, #FFFBF5`

    return (
        <div className="agent" >
             <button className='agent--btn' onClick={() => props.parentCallback(true, props)} 
            style={{
                background: props.backgroundGradientColors ? 
                `linear-gradient(to bottom right, #${props.backgroundGradientColors[0]}, #${props.backgroundGradientColors[1]}, #${props.backgroundGradientColors[2]}, #${props.backgroundGradientColors[3]})` : defaultBackground
            }}
             >
                <img
                    src={props.displayIconSmall}
                    className="agent--image"
                    alt="Valorant Agent"
                />
                <p className="agent--name">{props.displayName}</p>
            </button>
        </div>
    )
}

export default Agent;