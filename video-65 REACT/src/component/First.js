import './First.css';
function First (props){
    const firstName = props.name;
    return(
        <div> 
        <p className='First'>{firstName}</p>
        {props.children}
        </div>
    )
}
export default First;