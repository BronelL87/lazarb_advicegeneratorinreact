import myAdvice from "../Interfaces/interface";

const getData = async () => {
    const promise = await fetch('https://api.adviceslip.com/advice')
    const data: myAdvice = await promise.json();
    return data;
}

export default getData