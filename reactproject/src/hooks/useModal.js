import {useState} from "react";

const useModal = (initialState = false) => {
    const [show, setShow] = useState(initialState);

    const close = () => setShow(false);
    const open = () => setShow(true);

    return [show, open, close]
}

export default useModal;