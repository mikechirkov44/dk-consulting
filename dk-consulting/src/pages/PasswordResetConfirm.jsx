import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import authService from "../services/authService";
import React from "react";

import Header from "../components/Header&Footer/Header";
import Footer from "../components/Header&Footer/Footer";
import { HeaderBurger } from "../components/Header&Footer/HeaderBurger";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";

const PasswordResetConfirm = () => {

  const [defaultPageWidth, setDefaultPageWidth] = React.useState(window.innerWidth);
  const bp = 767;
  React.useEffect(() => {
    const windowResizer = () => setDefaultPageWidth(window.innerWidth);
    window.addEventListener("resize", windowResizer);
    return () => {
      window.removeEventListener("resize", windowResizer);
    };
  }, []);

  //
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [msgVisible, setMsgVisible] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const { token } = useParams();
  console.log(token);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsgVisible(true);
    setMessage("Загрузка");
    authService
      .resetPasswordConfirm({ token: token, password: password })
      .then((res) => {
        console.log(res);
        setMessage("Пароль успешно изменен!");
        setTimeout(() => {
          setMsgVisible(false);
          navigate("/")
        }, "3000");
      })
      .catch((err) => {
        setMessage("Что-то пошло не так, попробуйте снова!");
        setTimeout(() => {
          setMsgVisible(false);
        }, "3000");
        console.log(err);
      });
  };

  return (
    <div>
    {defaultPageWidth > bp
        ? <Header />
        : <HeaderBurger/>
    }
    <main className="mt-[70px] min-h-[calc(100vh-205px)] lg:mt-[87px] md:mt-[87px] sm:mt-[64px] xs:mt-[64px]">
      <section className="w-full h-[calc(100vh-205px)] bg-infopromo bg-cover bg-no-repeat flex flex-col items-center justify-center">
        <div className="w-[860px] h-[max-content] bg-[#0A0B22] flex flex-col items-center py-[50px] relative lg:w-[680px] md:w-[680px] md:py-30px sm:w-[410px] sm:py-5 xs:w-[290px] xs:py-5">
          <Link to="/" className="absolute right-[22px] top-[30px] sm:top-4 sm:right-4">
            <svg className="sm:w-4 xs:w-4" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.45508 1.22253L26.4551 26.2225M26.4551 1.22253L1.45508 26.2225" stroke="#E8E9EF" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          {msgVisible ? (
            <div className="flex flex-col items-center justify-center py-20">
              <h2 className="text-white text-[40px] text-center leading-[56px] font-extralight lg:text-4xl md:text-4xl md:mt-[25px] sm:mt-5 sm:text-xl sm:uppercase xs:uppercase xs:text-lg  xs:mt-4">{message}</h2>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col w-full items-center space-y-5 mt-5 max-w-[710px] lg:max-w-[515px] md:max-w-[515px] sm:max-w-[320px]"
              >
                <h2 className="text-white text-[40px] text-center leading-[56px] font-extralight lg:text-4xl md:text-4xl md:mt-[25px] sm:mt-5 sm:text-xl sm:uppercase xs:uppercase xs:text-lg  xs:mt-4">Создание нового пароля</h2>
                <input
                  type="password"
                  placeholder="Новый пароль"
                  value={password}
                  onChange={handlePasswordChange}
                  minLength={8}
                  className="w-[100%] bg-[#0A0B22] border-b-[1px] text-white font-light text-[22px] leading-[16px] p-3 lg:text-lg md:text-lg sm:text-base xs:text-base"
                ></input>
                <Button bluebtn="true" buttonText="Создать новый пароль" type="submit">Создать новый пароль</Button>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
    <Footer />
    </div>
  );
};

export default PasswordResetConfirm;
