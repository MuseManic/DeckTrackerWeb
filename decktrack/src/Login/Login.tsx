

function Login ()
{
return (
<>
<LoginUserNamePassword/>

</>
);


}

function LoginUserNamePassword() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Enter your username" 
                            className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-full py-3 px-6"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Enter your password" 
                            className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-full py-3 px-6"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                    >
                        Submit
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Not signed in? 
                    <a href="/register" className="text-blue-500 hover:underline ml-1">Register here</a>
                </p>
            </div>
        </div>
    );
}







export default Login; 