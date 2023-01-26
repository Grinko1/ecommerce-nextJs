import style from '../styles/Order.module.scss';
import s from '../Components/Radio/Radio.module.scss';
import InputMask from 'react-input-mask';
import { useEffect, useState } from 'react';
import Radio from '@/Components/Radio/Radio';
import BtnWatchAll from '@/Components/BtnWatchAll/BtnWatchAll';
import CartItems from '@/Components/CartItems/CartItems';
import { newProducts } from 'data/new';
import cn from 'classnames';
import { useRouter } from 'next/router';

function PhoneInput(props) {
  return (
    <InputMask
      mask="(+7) 999 999 99 99"
      value={props.value}
      onChange={props.onChange}
      placeholder="+7 (___) ___-__-__"></InputMask>
  );
}

const Order = () => {
  // const {cartTotalAmount, cartItems} = useSelector(state=>state.cartItems)
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [order, setOrder] = useState('');
  const [pay, setPay] = useState('');
  const [nextStep, setNextStep] = useState(false);
  const [focused, setFocused] = useState(false);
  const [isError, setIsErrorMsg] = useState(false);

  const handleInputPhone = ({ target: { value } }) => setPhone(value);
  const handleInputName = ({ target: { value } }) => setName(value);
  const handleInputLastName = ({ target: { value } }) => setLastName(value);
  const handleInputEmail = ({ target: { value } }) => setEmail(value);
  const handleChangeOrder = (e) => {
    setOrder(e.target.value);
  };
  const handleChangePay = (e) => {
    setPay(e.target.value);
  };
  const handleFocus = () => {
    setFocused(true);
  };

  useEffect(() => {
    if (
      order === '' ||
      pay === '' ||
      name === '' ||
      lastName === '' ||
      phone === '' ||
      email === ''
    ) {
      setNextStep(false);
    } else {
      setNextStep(true);
    }
  }, [name, lastName, phone, email, pay, order]);

  useEffect(() => {
    if (focused === true) {
      setIsErrorMsg(true);
    }
  }, [focused]);

  const handleCheckForm = () => {
    if (nextStep === true) {
      router.push('/thanks-for-order');
    }
  };

  return (
    <div className={style.order}>
      <div className={style.container}>
        <div className={style.block}>
          <div className={style.step}>
            <div className={style.stepImg}>
              <img src="/icons/first-step.png" alt="" />
            </div>
            <div className={cn(style.stepRight, style.stepInfo)}>
              <label className={style.stepLabel}>
                <input
                  type="text"
                  placeholder="Имя"
                  required
                  value={name}
                  onChange={handleInputName}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                />
              </label>
              <label className={style.stepLabel}>
                <input
                  type="text"
                  placeholder="Фамилия"
                  required
                  value={lastName}
                  onChange={handleInputLastName}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                />
              </label>

              <label className={style.stepLabel}>
                <PhoneInput value={phone} onChange={handleInputPhone}></PhoneInput>
              </label>
              <label className={style.stepLabel}>
                <input
                  type="email"
                  placeholder="E-mail"
                  required
                  value={email}
                  onChange={handleInputEmail}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                />
              </label>
            </div>
          </div>
          <div className={cn(style.secondStep, style.step)}>
            <div className={style.stepImg}>
              <img src="/icons/second-step.png" alt="" />
            </div>
            <div className={style.stepInfo}>
              <Radio
                id="radio-1"
                htmlFor="radio-1"
                name="order"
                value="radio-1"
                onChange={handleChangeOrder}>
                Доставка в отделение почты —
                <br /> <span className="pink-link">согласно тарифам НП</span>
              </Radio>
              <Radio
                id="radio-2"
                htmlFor="radio-2"
                name="order"
                value="radio-2"
                onChange={handleChangeOrder}>
                Курьерская доставка почты —
                <br /> <span className="pink-link">согласно тарифам НП</span>
              </Radio>
              <Radio
                id="radio-3"
                htmlFor="radio-3"
                name="order"
                value="radio-3"
                onChange={handleChangeOrder}>
                Международная доставка —
                <br /> <span className="pink-link">согласно тарифам Почты</span>
              </Radio>
              <Radio
                id="radio-4"
                htmlFor="radio-4"
                name="order"
                value="radio-4"
                onChange={handleChangeOrder}>
                Самовывоз с нашего шоурума  — <br /> <span className="pink-link">бесплатно</span>
              </Radio>
              <p className={style.adress}>
                г.Киев, ул. Нижний вал, 37 <br />
                Ежедневно с 11:00 до 21:00
              </p>
              <textarea
                className={style.textarea}
                name=""
                id=""
                cols="40"
                rows="5"
                placeholder="Комментарий к заказу"></textarea>
            </div>
          </div>
          <div className={style.step}>
            <div className={style.stepImg}>
              <img src="/icons/third-step.png" alt="" />
            </div>
            <div className={style.stepInfo}>
              <div className={style.stepInfo}>
                <Radio
                  id="card"
                  htmlFor="card"
                  name="cash"
                  oneLine
                  value="card"
                  onChange={handleChangePay}>
                  Каротой Visa / MasterCard
                </Radio>
              </div>
              <div className={style.stepInfo}>
                <Radio
                  id="cash"
                  htmlFor="cash"
                  name="cash"
                  oneLine
                  value="cash"
                  onChange={handleChangePay}>
                  Наличкой при получении
                </Radio>
              </div>

              <label className={style.stepLabel}>
                <input type="text" placeholder="Номер карты  boorivasis" />
              </label>
              <div className={cn(s.form_radio, style.smallRadio)}>
                <input id="radio-7" type="radio" name="agree" />
                <label htmlFor="radio-7">
                  Я уверена в заказе, со мной можно <br /> не связываться{' '}
                </label>
              </div>
            </div>
          </div>
          <div
            className={cn({
              [style.uncorrect]: isError == true,
              [style.hidden]: isError == false,
            })}>
            Заполните все поля!
          </div>
          <div className={style.orderBtn} onClick={handleCheckForm}>
            <BtnWatchAll
              img={'/icons/watch-all.png'}
              text={'Подтвердить заказ'}
              size={'l'}
              disabled={nextStep ? false : true}
            />
          </div>
        </div>
        <div className={style.cartBlock}>
          <CartItems />
          {newProducts.length ? (
            <>
              <div className={style.subtotal}>
                <p>
                  {' '}
                  <span>Cумма заказа:</span> <span className="order-cart-subtotal__price">4</span>
                </p>
                <p>
                  {' '}
                  <span>Стоимость доставки:</span>{' '}
                  <span className="order-cart-subtotal__price">Бесплатно</span>{' '}
                </p>
              </div>
              <div className={style.total}>
                Сумма заказа: . . . . . . <span> 4444 &#8381;</span>
              </div>
            </>
          ) : (
            <>
              <div className="empty-cart">
                <img src="/icons/emptycart.png" alt="" />
                <p>
                  Твоя корзина пуста, но это никогда
                  <br /> не поздно исправить:)
                </p>
              </div>
              <Link to="/">
                <BtnWatchAll img={'/icons/watch-all.png'} text={'За покупками'} size={'l'} />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
