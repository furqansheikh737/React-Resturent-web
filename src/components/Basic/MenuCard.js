
const MenuCard = ({ menuData }) => {
    // console.log(dataName);
    return (
        <>
            <section className="main-card--container">
                {menuData.map((curElem) => {

                    const { id, name, category, image, description } = curElem;

                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="caed-number card-circle subtle">{id}</span>
                                        <sapn className="card-author subtle">{name}</sapn>
                                        <h2 className="card-title">{name}</h2>
                                        <span className="card-description subtle">{description}</span>
                                        <div className="card-read">Read</div>
                                        <div>
                                            <img src={image} alt="images" className="card-media" />
                                            <span className="card-tag subtle">Order Now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );

                })}
            </section>

        </>
    );
}

export default MenuCard;