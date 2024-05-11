 import cheetah from './assets/cheetah.jpg'
 
 function Card(){
    return(
        <div className="card">
            <img src={cheetah} alt="cheetaa"></img>
            <h2>Rahul</h2>
            <p>likes boys</p>
        </div>
    );
 }
 export default Card