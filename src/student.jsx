//prop
import propTypes from 'prop-types' 
 function Student(props){
    return(
        <div className="student">
            <h2>studentName={props.name}</h2>
            <h3>Marks={props.mark}</h3>
            <h3>Student={props.isstudent?"yes":"no"}</h3>
        </div>
    )
}
 export default Student