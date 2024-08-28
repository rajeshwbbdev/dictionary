import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { InputContext } from "../App";
import MeaningList from "./MeaningList";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import "./Result.css";

axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en";

const Result = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { inputValue } = useContext(InputContext);

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const res = await axios(`${param}`);
      setResponse(res.data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData(inputValue);
    }
  }, [inputValue]);

  if (loading) {
    return <div className="loader"></div>;
  }

  if (error) {
    return (
      <h3 className="text-center m-10 font-semibold text-gray-500">
        No Definitions for <span className="font-bold">{inputValue}</span>
      </h3>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {response && (
        <div>
          {response[0].meanings && response[0].meanings.length > 0 && (
            <>
              <h3 className="text-2xl font-bold mt-4">
                Meaning & Definitions:
              </h3>
              <MeaningList mean={response} />
            </>
          )}
          {response[0].meanings.some((m) =>
            m.definitions.some((d) => d.example)
          ) && (
            <>
              <h3 className="text-2xl font-bold mt-4">Example:</h3>
              <Example mean={response} />
            </>
          )}
          {response[0].meanings.some(
            (m) => m.synonyms && m.synonyms.length > 0
          ) && (
            <>
              <h3 className="text-2xl font-bold mt-4">Synonym:</h3>
              <Synonyms mean={response} />
            </>
          )}
          {response[0].meanings.some(
            (m) => m.antonyms && m.antonyms.length > 0
          ) && (
            <>
              <h3 className="text-2xl font-bold mt-4">Antonym:</h3>
              <Antonyms mean={response} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Result;
