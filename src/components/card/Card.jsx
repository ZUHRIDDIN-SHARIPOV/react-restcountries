import Sp from "../sp/Sp";
import "./Card.scss";

const Card = ({ data, loading }) => {
  return (
    <>
      <main>
        <section className="card">
          <div className="container">
            <div className="card__block">
              <div className="loading">{loading && <Sp />}</div>
              <div className="card__list">
                {data.map((card, id) => (
                  <div className="card__item" key={id}>
                    <div className="card__item-img">
                      <img src={card.flags.png} alt={card.flags.alt} />
                    </div>
                    <h1 className="card__item-title">{card.name.common}</h1>
                    <h3 className="card__item-capital">
                      Poytaxti: {card.capital}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Card;
