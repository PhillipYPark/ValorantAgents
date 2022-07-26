import './modal.css';

const Modal = (props) => {
    console.log(props);
    const agent = props.currentAgent;
    return (
        <div className="modal">
            <div className="modal--container">
               <p>{agent.displayName}</p>
               <p>{agent.description}</p>
               {/* 
               abillities
               background
               bustPortrait
               icon or portrait
               kill feed portrait
               role
               voiceline
                */}
            </div>
        </div>
    )
}

export default Modal;
