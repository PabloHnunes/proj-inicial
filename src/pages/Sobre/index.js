import React from "react";
const Page = () => {
  return (
    <>
      <div className="tabs">
        <input type="radio" name="tabs" id="tabone" defaultChecked/>
        <label for="tabone">Capa do Pedido</label>
        <div className="tab">
        </div>

        <input type="radio" name="tabs" id="tabtwo" />
        <label for="tabtwo">Pedidos</label>
        <div className="tab">
        </div>
      </div>
    </>
  );
};

export default Page;
