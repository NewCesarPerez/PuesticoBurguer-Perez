const ItemCount = ({ maxQty, onAdd, qty, setQty }) => {
  const handleSum = () => qty < maxQty && setQty(qty + 1);
  const handleSubstract = () => qty > 1 && setQty(qty - 1);

  return (
    <div className="d-flex flex-column">
      <div>
        <button
          onClick={handleSubstract}
          className="btn btn-outline-danger w-auto"
        >
          -
        </button>
        <span className="mx-2">{qty}</span>
        <button onClick={handleSum} className="btn btn-outline-success w-auto">
          +
        </button>
      </div>
      <div className="mt-2 mb-1">
        <button onClick={onAdd} className="btn btn-danger mx-1  m-auto">
          Agregar
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
