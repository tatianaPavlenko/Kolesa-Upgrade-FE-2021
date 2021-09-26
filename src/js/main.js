import '../css/style.css';

document.querySelector('#app').innerHTML = `
<!--Модалка-->
<div class="modal-window">

    <!-- Контент модалки -->
    <div class="wrapper-modal-content">
        <div class="modal-content">
            <div class="main-image">
                <img src="/src/assets/main-image.png">
                    <div class="image-preview">
                        <span class="preview"><img src="/src/assets/preview1.png" alt="beige sweater"> </span>
                        <span class="active-preview"><img src="/src/assets/preview2.png" alt="black sweater"> </span>
                        <span class="preview"><img src="/src/assets/preview3.png" alt="blue sweater"> </span>
                    </div>
                </div>

                <div class="description">
                    <h3 class="naming">Футболка "Эволюционируй или сдохни"</h3>
                        <div class="price-block">
                            <div class="price">
                                <div class="additional">
                                    <h3 class="product-price">100 баллов</h3>
                                    <button class="order-button" type="submit" id="button-order">
                                        Заказать
                                    </button>
<!--Баланс юзера-->
                                    <div class="users-points">
                                        <p class="your-balance">Твой баланс:</p>
                                        <span class="number-of-points">3 945 баллов</span>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="color">
                            <p class="available-colors">Цвета:</p>
                                <div class="radio-buttons">
                                    <div class="radio-buttons-color">

                                        <input id="radiobutton1" type="radio" name="color" value="1" checked>
                                        <img src="/src/assets/blue.png" alt="blue">
                                        <label for="radiobutton1">Синий</label>

                                    </div>
                                    <div class="unchecked-buttons">

                                    <div class="radio-buttons-color">

                                        <input id="radiobutton2" type="radio" name="color" value="2">
                                        <img src="/src/assets/beige.png" alt="beige">
                                        <label for="radiobutton2">Бежевый</label>
                                    </div>

                                    <div class="radio-buttons-color">

                                        <input id="radiobutton3" type="radio" name="color" value="3">
                                        <img src="/src/assets/gray.png" alt="gray">
                                        <label for="radiobutton3">Серый</label>
                                    </div>
                                </div>
                        </div>
                                    </div>

                <div class="available-size">
                    <p class="size">Размер:</p>
                        <div class="radio-buttons">
                            <div class="radio-buttons-size">
                                <input id="radiobutton1size" type="radio" name="size" value="S">
                                <label for="radiobutton1size">S</label>
                            </div>
                            <div class="wrapper-unchecked-size">
                                <div class="radio-buttons-size">
                                <input id="radiobutton2size" type="radio" name="size" value="M">
                                <label for="radiobutton2size">M</label>
                            </div>

                            <div class="radio-buttons-size">
                                <input id="radiobutton3size" type="radio" name="size" value="L">
                                <label for="radiobutton3size">L</label>
                            </div>
                </div>

            </div>
        </div>

                <div class="info">
                    <div class="info-title">
                        Детали:
                    </div>
                    <div class="info-description">
                        Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%
                    </div>

                    <div class="how-to-choose">
                        Как выбрать размер:
                    </div>
                    <div class="how-to-choose-description">
                        Написать дяде Рику для уточнения.
                    </div>
                </div>
            </div>

        </div>

        <span class="close">x</span>
    </div></div>





`;
