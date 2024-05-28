import "../../styles/Footer.css"

export const Footer = () => {
    return(
        <footer style={{backgroundColor: "#333", color: "white"}}>
        <h5 style={{marginLeft: "120px", paddingTop: "30px"}}>Auth Bank</h5>
        <hr style={{width: "80%", marginLeft: "120px"}} />
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Nossos Produtos</h4>
                        <ul className="footer-links">
                            <li><a href="#">Nossos Cartões</a></li>
                            <li><a href="#">Contas Correntes</a></li>
                            <li><a href="#">Cartão de Crédito</a></li>
                            <li><a href="#">Investimentos</a></li>
                            <li><a href="#">Seguros</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Support</h4>
                        <ul className="footer-links">
                            <li><a href="#">Perguntas Frequentes</a></li>
                            <li><a href="#">Central de Ajuda</a></li>
                            <li><a href="#">Canais Auth Bank</a></li>
                            <li><a href="#">Termos de Uso</a></li>
                            <li><a href="#">Política de Privacidade</a></li>
                            <li><a href="#">Segurança</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Acompanhe</h4>
                        <ul className="footer-links">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>&copy; {new Date().getFullYear()} Auth Bank°</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}