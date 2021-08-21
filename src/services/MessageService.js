import Axios from "axios";

export const GetMessage = () =>
  Axios.get("https://GitTweetBackend.praveenscience.repl.co/api/messages");

export const SendMessage = (Name, Image, Text) =>
  Axios.post("https://GitTweetBackend.praveenscience.repl.co/api/messages", {
    Name,
    Image,
    Text
  });
