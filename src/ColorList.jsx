export default function ColorList({ colors }) {
    // const elements = [<p>Hello!</p>, <h1>Bye!</h1>];
    return (
        <div>
            <p>Color List</p>
            <ul>
                {colors.map((color) => (
                    <li style={{ color: color }}>{color}</li>
                ))}
            </ul>
        </div>
    )
}