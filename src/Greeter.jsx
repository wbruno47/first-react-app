function Greeter(params) {
    const { name = "No Name" } = params;
    return (
        <div>
            <p>Hello There, {name}!!</p>
        </div>
    )
}

export default Greeter; 