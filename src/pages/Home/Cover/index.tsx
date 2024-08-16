import { CoverContainer, TextsContainer, LargeImage } from './styles.ts'
import largeImage from '../../../assets/Imagem.png'


export function Cover() {
    return (
        <CoverContainer>
            <TextsContainer>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <br/>
                <div>
                    <p>Compra simples e segura</p>
                    <p>Embalagem mantém o café aquecido</p>
                    <p>Entrega rápida e rastreada</p>
                    <p>O café chega fresquinho até você</p>
                </div>
            </TextsContainer>
            <LargeImage> <img src={largeImage}/> </LargeImage>
        </CoverContainer>
    )
}