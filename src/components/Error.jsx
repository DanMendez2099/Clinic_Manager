const Error = ({children}) => {
    return(
        (
            <div className="bg-red-600 p-3 text-white font-bold mb-3 rounded text-center uppercase">
                <p>
                    {children}
                </p>
            </div>
        )
    )

}
export default Error