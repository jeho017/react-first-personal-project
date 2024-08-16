import React from "react";

function Form({
  name,
  gold,
  silver,
  bronze,
  setName,
  setGold,
  setSilver,
  setBronze,
  handleAddCountry,
  handleUpdateCountry,
}) {
  return (
    <div className="form-container">
      <div className="input-group">
        <label>국가명</label>
        <input
          type="text"
          placeholder="국가 입력"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>금메달</label>
        <input
          type="number"
          placeholder="금메달"
          value={gold}
          onChange={(e) => setGold(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>은메달</label>
        <input
          type="number"
          placeholder="은메달"
          value={silver}
          onChange={(e) => setSilver(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>동메달</label>
        <input
          type="number"
          placeholder="동메달"
          value={bronze}
          onChange={(e) => setBronze(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button className="button-Add" onClick={handleAddCountry}>
          국가 추가
        </button>
        <button className="button-upDate" onClick={handleUpdateCountry}>
          업데이트
        </button>
      </div>
    </div>
  );
}

export default Form;
