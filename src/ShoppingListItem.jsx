function ShoppingListItem({ item, quantity, completed }) {
    const style = {
        color: completed ? "gray" : "purple",
        textDecoration: completed ? "line-through" : 'none',
        fontSize: '28px'
    }
    return (
        <li style={style}>
            {item} - {quantity}
        </li>

    )
}


export default ShoppingListItem;

// <li key={i.id}
//     style={{
//         color: i.completed ? "gray" : "black",
//         textDecoration: i.completed ? "line-through" : 'none'
//     }}>
//     {i.item} - {i.quantity}
// </li>))}