import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-container">
      <div>Тренажер / Арифметические действия с обыкновенными дробями</div>
      <div className="inner-block">
        <div className="left-block">Решено примеров 1 из 15</div>
        <div className="right-block">Следующий пример</div>
      </div>
      <div className="bottom-block">
        <div className="nested-block">Таблица умножения</div>
        <div className="extra-block">
          Переводим смешанное число в неправильную дробь :
        </div>
      </div>
    </div>
  );
};

export default MainPage;
