import './Login.css'
function Login(){
    return(
        <>
            <div className='form'>
                
                <div className="container">
                <h2>Login</h2>
                    <input type="text" placeholder='email'/>
                    <input type="text" placeholder='password'/>
                    <button>Submit</button>
                </div>
            </div>
        </>
    );
}
export default Login;