import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-container">
      <div>Тренажер / Арифметические действия с обыкновенными дробями</div>
      <div className="inner-block">
        <div className="left-block">
          <div className="progress-text">Решено примеров 1 из 15</div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "6.67%" }}></div>
          </div>
        </div>
        <div className="right-block">Следующий пример</div>
      </div>
      <div className="bottom-block">
        <div className="nested-block">Таблица умножения</div>
        <div className="extra-block">
          Переводим смешанное число в неправильную дробь:
        </div>

        <div>
          <div id="fractions">
            {/* Первый блок дробей */}
            <div id="fraction1">
              <div className="mixed-number">
                <span className="whole-number">3</span>
                <span className="fraction">
                  <span className="numerator">2</span>
                  <span className="denominator">9</span>
                </span>
              </div>
              <span className="math-symbol">+</span>
              <div className="mixed-number">
                <span className="whole-number">4</span>
                <span className="fraction">
                  <span className="numerator">3</span>
                  <span className="denominator">7</span>
                </span>
              </div>
              <span className="math-symbol">=</span>
            </div>

            {/* Второй блок дробей */}
            <div id="fraction2">
              <div className="mixed-number">
                <span className="fraction">
                  <span className="numerator">
                    <img
                      src="src/assets/left.png"
                      alt="("
                      className="bracket-image"
                    />
                    <input type="text" /> * <input type="text" />
                    <img
                      src="src/assets/right.png"
                      alt=")"
                      className="bracket-image"
                    />{" "}
                    + <input type="text" />
                  </span>
                  <span className="denominator">
                    <div className="static-input">9</div>
                  </span>
                </span>
              </div>
              <span className="math-symbol">+</span>
              <div className="mixed-number">
                <span className="fraction">
                  <span className="numerator">
                    <img
                      src="src/assets/left.png"
                      alt="("
                      className="bracket-image"
                    />
                    <input type="text" /> * <input type="text" />
                    <img
                      src="src/assets/right.png"
                      alt=")"
                      className="bracket-image"
                    />{" "}
                    + <input type="text" />
                  </span>
                  <span className="denominator">
                    <div className="static-input">7</div>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="downright-block">Далее</div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
