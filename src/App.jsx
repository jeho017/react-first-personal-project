import { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const handleAddCountry = () => {
    event.preventDefault();

    const existingCountry = countries.find((country) => country.name === name);
    if (existingCountry) {
      alert(
        "이 국가는 이미 추가 되었습니다. 메달을 수정하려면 업데이트 버튼을 사용하세요."
      );
      return;
    }

    setCountries([
      ...countries,
      {
        name,
        gold: parseInt(gold),
        silver: parseInt(silver),
        bronze: parseInt(bronze),
      },
    ]);
    clearFields();
  };

  const handleUpdateCountry = () => {
    const countryToUpdate = countries.find((country) => country.name === name);

    if (countryToUpdate) {
      const updatedCountries = countries.map((country) => {
        if (country.name === countryToUpdate.name) {
          return {
            ...countryToUpdate,
            gold: parseInt(gold),
            silver: parseInt(silver),
            bronze: parseInt(bronze),
          };
        } else {
          return country;
        }
      });

      setCountries(updatedCountries);
      clearFields();
    } else {
      alert("해당 국가를 찾을 수 없습니다.");
    }
    return;
  };
  // const handleUpdateCountry = () => {
  //   setCountries(
  //     countries.map((country) =>
  //       country.name === name
  //         ? {
  //             ...country,
  //             gold: parseInt(gold),
  //             silver: parseInt(silver),
  //             bronze: parseInt(bronze),
  //           }
  //         : country
  //     )
  //   );
  //   clearFields();
  // };

  const handleDeleteCountry = (name) => {
    const filteredCountries = countries.filter(
      (country) => country.name !== name
    );

    setCountries(filteredCountries);
  };

  const clearFields = () => {
    setName("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  const sortedCountries = countries.sort(
    (a, b) =>
      b.gold - a.gold ||
      b.silver - a.silver ||
      b.bronze - a.bronze ||
      a.name.localeCompare(b.name)
  );

  return (
    <div className="container">
      <h1>2024 파리 올림픽</h1>
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

      <div className="medal-table">
        <div className="table-header">
          <div>순위</div>
          <div>국가</div>
          <div>금메달</div>
          <div>은메달</div>
          <div>동메달</div>
          <div>총합</div>
          <div>삭제</div>
        </div>
        {sortedCountries.map((country, index) => (
          <div key={index} className="table-row">
            <div>{index + 1}</div>
            <div>{country.name}</div>
            <div>{country.gold}</div>
            <div>{country.silver}</div>
            <div>{country.bronze}</div>
            <div>{country.gold + country.silver + country.bronze}</div>
            <div>
              <button
                className="button-Delete"
                onClick={() => handleDeleteCountry(country.name)}
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
