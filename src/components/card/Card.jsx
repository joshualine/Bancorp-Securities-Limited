

const Card = ({ title, amount, percentage, badgeStyle, ytdFigure, children }) => {

  
  return (
    <>
    <div className="px-1 py-2">

      <div
        className="card"
        style={{ width: "17rem", backgroundColor: "#d4e1fa" }}
      >
        <div className="card-body flex-row">
          <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
        </div>
        <div className="card-body flex-row py-0">
          <h5 className="card-title font-weight-bold my-0">{amount} </h5>
          <h5>
            <span
              className="badge mx-3 mb-2 font-weight-bold"
              style={badgeStyle}
            >
              {percentage} %
              <span>
                {children}
              </span>
            </span>
          </h5>
        </div>
        <div className=" badge" style={{ backgroundColor: "#a8a8f4" }}>
          <p className="card-title font-weight-light my-0 mx-0">
            YTD: <span className="card-body font-weight-bold">{ytdFigure}</span>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;
