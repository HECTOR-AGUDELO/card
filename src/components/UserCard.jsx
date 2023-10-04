const UserCard = ({ user, deleteUser, setInfoUpdate, handleOpenForm}) => {
                                                    
  const handleDelete = () => {
    deleteUser("/users", user.id)
  }

  const handleEdit = () => {
    setInfoUpdate(user)
    handleOpenForm()
  }

  return (
    <article className="card">
      <h3 className="usercard__name">#{`${user.id}  ${user.first_name} ${user.last_name}`}</h3>
      <ul className="prueva">
        <li className="item__email"><span><i class='bx bx-envelope'></i> </span> {user.email}<span></span></li>
        <li className="item__birthday"><span><i class='bx bx-gift'></i></span> {user.birthday}<span></span></li>
      </ul>
      <div className="btns__card">
      <button className="btn icon-trash" onClick={handleDelete}><i class='bx bxs-trash bx-sm bx-tada-hover'></i></button>
      <button className="btn icon-edit" onClick={handleEdit}><i class='bx bxs-pencil bx-sm bx-tada-hover'></i></button>
      </div>
    </article>
  )
}

export default UserCard