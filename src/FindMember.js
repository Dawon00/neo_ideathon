import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import memberdata from "./MemberData";
import "./FindMember.css";
import { useSelector, useDispatch } from "react-redux";
import {
    setName,
    setRole,
    setSchool,
    setNickname,
    setIsConfirmed,
} from "./store";
import Select from "react-select";

function FindMember() {
    const state = useSelector((state) => {
        return state;
    });
    const dispatch = useDispatch();

    const schoolOptions = [
        { value: "광운대학교", label: "광운대학교" },
        { value: "숭실대학교", label: "숭실대학교" },
        { value: "서울여자대학교", label: "서울여자대학교" },
        { value: "동덕여자대학교", label: "동덕여자대학교" },
        { value: "한국외국어대학교", label: "한국외국어대학교" },
    ];

    const roleOptions = [
        { label: "Android", value: "Android" },
        { label: "iOS", value: "iOS" },
        { label: "Web", value: "Web" },
        { label: "Node.js", value: "Node.js" },
        { label: "Spring", value: "Spring" },
        { label: "Designer", value: "Designer" },
        { label: "Plan", value: "Plan" },
    ];

    const handleCheckClick = () => {
        console.log("체크하기 버튼 눌림");
        try {
            const data = memberdata;

            const match = data.find(
                (item) =>
                    item.name === state.name &&
                    item.school === state.school &&
                    item.role === state.role
            );
            console.log(match);
            dispatch(setIsConfirmed(match !== undefined));
            if (match !== undefined) {
                dispatch(setNickname(match.nickname));
            } else {
                console.log("찾지못함");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(state.name, state.school, state.role, state.nickname);
    }, [state.name, state.school, state.role, state.nickname]);

    return (
        <div className="bg-slate-800  min-h-screen flex justify-center">
            <div className="flex flex-col items-center justify-center py-8">
                <div className="bg-slate-100 p-8 rounded-lg shadow-md">
                    <div className="text-2xl font-bold mb-6 text-center text-gray-700">
                        NEO IDEATHON
                    </div>
                    <div className="flex flex-col space-y-5">
                        <div className="flex items-center">
                            <div className="text-gray-700 font-medium mr-5">
                                Name
                            </div>
                            <input
                                id="name"
                                type="text"
                                value={state.name}
                                onChange={(e) =>
                                    dispatch(setName(e.target.value))
                                }
                                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Name (ex:홍길동)"
                            />
                        </div>
                        <div className="flex items-center">
                            <div className="text-gray-700 font-medium mr-3.5">
                                School
                            </div>
                            <Select
                                options={schoolOptions}
                                value={{
                                    value: state.school,
                                    label: state.school,
                                }}
                                onChange={(selectedOption) =>
                                    dispatch(setSchool(selectedOption.value))
                                }
                                styles={{
                                    control: (styles) => ({
                                        ...styles,
                                        backgroundColor: "white",
                                        borderRadius: "0.375rem",
                                        borderColor: "#8B5CF6",
                                        boxShadow: "none",
                                        "&:hover": { borderColor: "#8B5CF6" },
                                    }),
                                    option: (styles, { isSelected }) => ({
                                        ...styles,
                                        backgroundColor: isSelected
                                            ? "#8B5CF6"
                                            : "white",
                                        color: isSelected ? "white" : "black",
                                        "&:hover": {
                                            backgroundColor: "#8B5CF6",
                                            color: "white",
                                        },
                                        fontSize: "14px",
                                    }),
                                }}
                            />
                        </div>
                        <div className="flex items-center">
                            <div className="text-gray-700 font-medium mr-8">
                                Role
                            </div>
                            <Select
                                options={roleOptions}
                                value={{
                                    value: state.role,
                                    label: state.role,
                                }}
                                onChange={(selectedOption) =>
                                    dispatch(setRole(selectedOption.value))
                                }
                                styles={{
                                    control: (styles) => ({
                                        ...styles,
                                        backgroundColor: "white",
                                        borderRadius: "0.375rem",
                                        borderColor: "#8B5CF6",
                                        boxShadow: "none",
                                        "&:hover": { borderColor: "#8B5CF6" },
                                    }),
                                    option: (styles, { isSelected }) => ({
                                        ...styles,
                                        backgroundColor: isSelected
                                            ? "#8B5CF6"
                                            : "white",
                                        color: isSelected ? "white" : "black",
                                        "&:hover": {
                                            backgroundColor: "#8B5CF6",
                                            color: "white",
                                        },
                                    }),
                                }}
                            />
                        </div>
                    </div>
                    <button
                        id="check_button"
                        className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-64 py-2 mt-5 transition-all duration-200 hover:scale-105"
                        onClick={handleCheckClick}
                    >
                        Check
                    </button>
                    {state.isConfirmed && (
                        <div style={{ color: "green" }}>
                            Confirmed<span className="checkmark"></span>
                        </div>
                    )}
                    {!state.isConfirmed && (
                        <div style={{ color: "red" }}>Not found</div>
                    )}
                    {state.isConfirmed && (
                        <Link to="/card">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-64 py-2 mt-5 transition-all duration-200 hover:scale-105">
                                Make Card
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FindMember;
