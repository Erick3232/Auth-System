import "../pages/menu/Menu.css"

export const Cards = () => {
    return(
    <div className="app-body-sidebar">
        <span className='withLine'></span>
        <section className="payment-section">
            <h2 style={{color: "black"}}>My Cards</h2>
            <div className="payment-section-header">
                <p style={{color: "black"}}>Choose a card for more details</p>
            </div>
        </section>
    </div>
    )
}