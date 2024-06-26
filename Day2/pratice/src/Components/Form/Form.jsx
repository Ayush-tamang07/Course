import './Form.css'
function Form(){
    return(
        <>
            <div className='form'>
                <div className="container">
                    <input type="text" placeholder='user name'/>
                    <input type="text" placeholder='email'/>
                    <input type="text" placeholder='password'/>
                    <button>Submit</button>
                </div>
            </div>
        </>
    );
}
export default Form;