
function List(){
    const fruits=[{id:1,name:"orange"},
                    {id:2,name:"mango"}]
    const listitems=fruits.map(x=><li>{x.id},{x.name}</li>)
    return(<ul>{listitems}</ul>)
}
export default List
