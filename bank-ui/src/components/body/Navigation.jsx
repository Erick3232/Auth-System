import Carousel from 'react-bootstrap/Carousel';
import "../../styles/Carrousel.css"
function Navigation() {
    return (
        <Carousel className="carousel" data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src='https://4all.com/wp-content/uploads/2021/06/5-Dicas-Bank.png'
                    alt="First slide"
                    style={{ height: '600px', width: '200px' }}
                />
                <Carousel.Caption style={{color: "black"}}>
                    <h5>Desbloqueie seu cartão</h5>
                    <p>Descubra múltiplas funções que nós oferecemos</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cartos-site-cms.s3.us-east-2.amazonaws.com/imagem_001_38dfc23bec.png"
                    alt="Second slide"
                    style={{ height: '600px', width: '200px' }}
                />
                <Carousel.Caption>
                    <h5>Confiabilidade e Segurança</h5>
                    <p>Foco principal em um banco digital, é a sua segurança e confiabilidade</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://telesintese.com.br/wp-content/uploads/2020/09/mobile-banking-banco-digital-aplicativo-celular-facilidades.jpg"
                    alt="Third slide"
                    style={{ height: '600px', width: '200px' }}
                />
                <Carousel.Caption>
                    <h5>Aplicativo</h5>
                    <p>Baixe o nosso aplicativo Auth-Bank em seu dispostivo</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default Navigation;
