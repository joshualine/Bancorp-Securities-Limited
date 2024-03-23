// import { AiOutlineStock } from "react-icons/ai";


const ListButton = ({title, children}) => {
  return (
    <>
      <div className="card mt-5 m-2" style={{ width: "18rem", backgroundColor: "#d4e1fa" }}>
        <div className="card-body">
          <div className="flex-row">
            <h5 className="card-title font-weight-bold">{title}</h5>
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

export default ListButton