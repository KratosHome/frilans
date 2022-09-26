import React, {useState} from 'react';


export const Timer = () => {
    const [time, setTime] = useState<any>(0);

    const inputChange = (e: any) => {
        setTime(+e.target.value);
    }
    return (
        <div>
            <div>
                     <span className="digits">
                             {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
                         </span>
                <span className="digits">
                     {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
               </span>
                <span className="digits">
                     {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
                </span>
                <span className="digits mili-sec">
                     {("0" + ((time / 10) % 100)).slice(-2)}
                </span>
            </div>

            <input
                onChange={inputChange}
                type="range"
                min="0"
                max="200000"
            />
        </div>
    );
};

/*

    useEffect(() => {
        let interval: any = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time: any) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);


    const inputChange = (e: any) => {
        setTime(+e.target.value);
    }
 */