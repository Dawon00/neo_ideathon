import React, { useState, useEffect } from "react";
import "./Card.css";
import { useSelector } from "react-redux";
import LoadingScreen from "./LoadingScreen";
function Card() {
    const [isLoading, setIsLoading] = useState(true);
    let state = useSelector((state) => {
        return state;
    });

    useEffect(() => {
        // 2초 후에 isLoading 상태를 false로 변경하여 로딩 화면을 종료합니다.
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className=" bg-slate-800 min-h-screen flex justify-center ">
                <div className="flex flex-col items-center justify-center py-8">
                    <LoadingScreen></LoadingScreen>;
                </div>
            </div>
        );
    }
    return (
        <div className=" bg-slate-800 min-h-screen flex justify-center ">
            <div className="flex flex-col items-center justify-center py-8">
                <div className="myCard">
                    <div className="innerCard">
                        <div className="frontSide">
                            <p className="title">{state.nickname}</p>
                            <p>{state.name}</p>
                            <p>{state.role}</p>
                            <p>{state.school}</p>
                        </div>
                        <div className="backSide">
                            <p className="title">NEO IDEATHON</p>
                            <p>Welcome</p>
                        </div>
                    </div>
                </div>{" "}
            </div>
        </div>
    );
}

export default Card;
