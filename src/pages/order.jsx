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
                  placeholder="??????"
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
                  placeholder="??????????????"
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
                ???????????????? ?? ?????????????????? ???????????????
                <br /> <span className="pink-link">???????????????? ?????????????? ????</span>
              </Radio>
              <Radio
                id="radio-2"
                htmlFor="radio-2"
                name="order"
                value="radio-2"
                onChange={handleChangeOrder}>
                ???????????????????? ???????????????? ???????????????
                <br /> <span className="pink-link">???????????????? ?????????????? ????</span>
              </Radio>
              <Radio
                id="radio-3"
                htmlFor="radio-3"
                name="order"
                value="radio-3"
                onChange={handleChangeOrder}>
                ?????????????????????????? ?????????????????????
                <br /> <span className="pink-link">???????????????? ?????????????? ??????????</span>
              </Radio>
              <Radio
                id="radio-4"
                htmlFor="radio-4"
                name="order"
                value="radio-4"
                onChange={handleChangeOrder}>
                ?????????????????? ???????????????? ???????????????? ??? <br /> <span className="pink-link">??????????????????</span>
              </Radio>
              <p className={style.adress}>
                ??.????????, ????. ???????????? ??????, 37 <br />
                ?????????????????? ?? 11:00 ???? 21:00
              </p>
              <textarea
                className={style.textarea}
                name=""
                id=""
                cols="40"
                rows="5"
                placeholder="?????????????????????? ?? ????????????"></textarea>
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
                  ?????????????? Visa / MasterCard
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
                  ???????????????? ?????? ??????????????????
                </Radio>
              </div>

              <label className={style.stepLabel}>
                <input type="text" placeholder="?????????? ??????????  boorivasis" />
              </label>
              <div className={cn(s.form_radio, style.smallRadio)}>
                <input id="radio-7" type="radio" name="agree" />
                <label htmlFor="radio-7">
                  ?? ?????????????? ?? ????????????, ???? ???????? ?????????? <br /> ???? ??????????????????????{' '}
                </label>
              </div>
            </div>
          </div>
          <div
            className={cn({
              [style.uncorrect]: isError == true,
              [style.hidden]: isError == false,
            })}>
            ?????????????????? ?????? ????????!
          </div>
          <div className={style.orderBtn} onClick={handleCheckForm}>
            <BtnWatchAll
              img={'/icons/watch-all.png'}
              text={'?????????????????????? ??????????'}
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
                  <span>C???????? ????????????:</span> <span className="order-cart-subtotal__price">4</span>
                </p>
                <p>
                  {' '}
                  <span>?????????????????? ????????????????:</span>{' '}
                  <span className="order-cart-subtotal__price">??????????????????</span>{' '}
                </p>
              </div>
              <div className={style.total}>
                ?????????? ????????????: . . . . . . <span> 4444 &#8381;</span>
              </div>
            </>
          ) : (
            <>
              <div className="empty-cart">
                <img src="/icons/emptycart.png" alt="" />
                <p>
                  ???????? ?????????????? ??????????, ???? ?????? ??????????????
                  <br /> ???? ???????????? ??????????????????:)
                </p>
              </div>
              <Link to="/">
                <BtnWatchAll img={'/icons/watch-all.png'} text={'???? ??????????????????'} size={'l'} />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
