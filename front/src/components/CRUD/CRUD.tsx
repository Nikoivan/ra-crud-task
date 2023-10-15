import { useState, useEffect, ChangeEvent } from "react";

import http from "../../assets/services/http/http";
import Preloader from "../Preloader/Preloader";
import { CrudCardProps } from "./CRUDTypes";
import CRUDHeader from "./Header/CRUDHeader";
import CRUDFooter from "./Footer/CRUDFooter";
import CRUDMain from "./Main/CRUDMain";

export default function CRUD() {
  const [loading, setLoading] = useState(false);
  const [inputState, setInputState] = useState("");
  const [cards, setCards] = useState<CrudCardProps[]>([]);

  //   let cards: CrudCardProps[] | [] = [];
  //   const setCards = (args: CrudCardProps[]) => {
  //     cards = args;
  //   };

  const url = "http://localhost:7070/notes";

  const getCards = async () => {
    if (loading) {
      setLoading(false);
    }
    setTimeout(async () => {
      const response = await http(url);
      if (response?.status === 200) {
        const cards = await response.json();
        setCards(cards);
        setLoading(true);
      }
    }, 1000);
  };

  const addCard = () => {
    if (inputState === "") {
      return;
    }

    const requestBody = {
      id: 0,
      content: inputState,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };

    http(url, options);
    setLoading(false);
  };

  const removeCard = (id: number) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    http(`${url}/${id}`, options);
    setLoading(false);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputState(e.target.value);
  };

  //   useEffect(() => {
  //     console.log("1"); /// судя по выводам в консоль он не нужен
  //     getCards();
  //   }, []);

  useEffect(() => {
    console.log("componentDidUpdate");
    if (!loading) {
      getCards();
    }
    return () => {
      getCards();
    };
  }, [loading]);

  return (
    <div className="crud">
      {!loading ? (
        <Preloader />
      ) : (
        <>
          <CRUDHeader callback={getCards} />
          <CRUDMain callback={removeCard} cards={cards} />
          <CRUDFooter onChangeHandler={onChangeHandler} callback={addCard} />
        </>
      )}
    </div>
  );
}
