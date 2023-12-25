import { useEffect, useState } from "react";

function useCountdown() {
    const [secondsLeft, setSecondsLeft] = useState(0);

    useEffect(() => {
        if (secondsLeft <= 0) {
            return;
        }

        const timeoutID = setTimeout(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000);

        return () => clearTimeout(timeoutID);
    }, [secondsLeft]);

    function startCountdown(seconds) {
        setSecondsLeft(seconds);
    }

    return [secondsLeft, startCountdown];
}

export { useCountdown };