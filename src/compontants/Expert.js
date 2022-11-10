import {AiFillStar} from 'react-icons/ai'

const Expert = (props) =>{

        return(
            <div>
                <div className="profile-img">
                    <img src= {props.src} alt = "logo"></img>
                    <span><AiFillStar/></span>
                </div>
                <div>
                    <h5>{props.name}</h5>
                    <h4> Languages: {props.lang}</h4>
                    <button >Schdule an Appointments</button>
                </div>

            </div>
        );
};

export default Expert;