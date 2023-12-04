export const ContactItem = ({ id, name, number, onDelete }) => (
    <li>{name}: {number} <button type="button" onClick={() => onDelete(id)} >Delete</button></li>
)

