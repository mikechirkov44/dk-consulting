import React from "react";
import { useState, useEffect } from "react";

import { InfoPromo } from "../components/Info/InfoPromo";
import Header from "../components/Header&Footer/Header";
import Footer from "../components/Header&Footer/Footer";
import { HeaderBurger } from "../components/Header&Footer/HeaderBurger";
import { InfoMaterials } from "../components/Info/InfoMaterials";
import { Helmet } from "react-helmet";
import articlesService from "../services/articlesService";
import Register from "../components/UI/Register";
import Login from "../components/UI/Login";

export const Info = () => {
    const [loginVisible, setLoginVisible] = useState(false);
    const [regVisible, setRegVisible] = useState(false);
    const [account, setAccount] = useState(false);
    const [email, setEmail] = useState("");
    const [effectTrigger, setEffectTrigger] = useState(false);

    const [articles, setArticles] = useState([]);
    const [paginattion, setPaginateVisible] = useState(false);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const jwt = localStorage.getItem("jwt");
        setPaginateVisible(false);

        if (jwt) {
            console.log("user found on page reload");
            setAccount(true);
            const localEmail = localStorage.getItem("email");
            setEmail(localEmail);
            setEffectTrigger(true);
        } else {
            console.log("net tokena");
            console.log("user unauthorized");
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        const jwt = localStorage.getItem("jwt");
        setPaginateVisible(false);

        if (jwt) {
            console.log("user found on login");
            console.log(localStorage.getItem("jwt"));

            const localEmail = localStorage.getItem("email");
            setEmail(localEmail);
            setEffectTrigger(true);
        } else {
            console.log("net tokena");
            console.log("user unauthorized");
            setLoading(false);
        }
    }, [account]);

    useEffect(() => {
        const jwt = localStorage.getItem("jwt");
        console.log(jwt, "68 строка");
        if (jwt) {
            articlesService
                .getArticles({ for_clients: "true" })
                .then((res) => {
                    console.log(res);
                    setArticles(res);
                    setLoading(false);
                    setPaginateVisible(true);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        } else {
            console.log(
                "Выгрузка данных для неавторизованного пользователя невозможна"
            );
            setLoading(false);
        }
    }, [effectTrigger]);

    const logout = () => {
        localStorage.clear();
        setAccount(false);
        setPaginateVisible(false);
        setEffectTrigger(false);
    };

    const [defaultPageWidth, setDefaultPageWidth] = React.useState(
        window.innerWidth
    );
    const bp = 767;
    React.useEffect(() => {
        const windowResizer = () => setDefaultPageWidth(window.innerWidth);
        window.addEventListener("resize", windowResizer);
        return () => {
            window.removeEventListener("resize", windowResizer);
        };
    }, []);

    return (
        <div>
            <Helmet>
                <title>Полезные материалы | DK-CONSULTING</title>
                <meta
                    name="description"
                    content="Полезные материалы компании"
                />
            </Helmet>
            {defaultPageWidth > bp ? <Header /> : <HeaderBurger />}
            <main className="mt-[70px] min-h-[calc(100vh-185px)] lg:mt-[87px] md:mt-[87px] sm:mt-[64px] xs:mt-[64px]">
                <InfoPromo
                    account={account}
                    email={email}
                    logout={logout}
                    setRegVisible={setRegVisible}
                    setLoginVisible={setLoginVisible}
                />
                {isLoading ? (
                    ""
                ) : (
                    <InfoMaterials
                        articles={articles}
                        isLoading={isLoading}
                        account={account}
                        paginattion={paginattion}
                        setRegVisible={setRegVisible}
                        setLoginVisible={setLoginVisible}
                    />
                )}
            </main>
            <Register
                isVisible={regVisible}
                setVisible={setRegVisible}
                setLoginVisible={setLoginVisible}
            />
            <Login
                isVisible={loginVisible}
                setVisible={setLoginVisible}
                setAccount={setAccount}
                regVisible={setRegVisible}
            />
            <Footer />
        </div>
    );
};
