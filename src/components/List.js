import "../assets/List.css";

function List({ title, items }) {
  return (
    <div className="list">
      <h2 className="listT">{title}</h2>
      <div className="listObj">
        {items &&
          items.map((item) => {
            {
              return <img src={item} />;
            }
          })}
      </div>
    </div>
  );
}

export default List;