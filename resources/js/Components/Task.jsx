import React, { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useForm, usePage } from "@inertiajs/react";

dayjs.extend(relativeTime);

export default function Task({ users, task }) {
    const { auth } = usePage().props;

    const [editing, setEditing] = useState(false);

    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        title: task.title,
        description: task.description,
        file: "",
        assignedTo: task.assignedTo,
        status: task.status,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("tasks.update", task.id), {
            onSuccess: () => setEditing(false),
        });
    };
    return (
        <div className="p-6 flex space-x-2">
            <button
                className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out"
                onClick={() => setEditing(true)}
            >
                <div className="flex-1">
                    {editing ? (
                        <form onSubmit={submit}>
                            <div className="my-5">
                                <label for="title"> Title</label>
                                <input
                                    type="text"
                                    maxLength={90}
                                    value={data.title}
                                    placeholder="Add title here"
                                    className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                            </div>
                            <div className="my-5">
                                <label for="Description"> Description </label>
                                <textarea
                                    name="Description"
                                    maxLength={255}
                                    value={data.description}
                                    placeholder="What to do?"
                                    className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                ></textarea>{" "}
                            </div>
                            <div className="my-5">
                                <label for="file"> File </label>
                                <input
                                    type="file"
                                    value={data.message}
                                    placeholder="What to do?"
                                    className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                ></input>{" "}
                            </div>
                            <div className="my-5">
                                <label for="assignedTo"> Assigned To </label>
                                {/* <input
                                    type="text"
                                    maxLength={50}
                                    value={data.assignedTo}
                                    placeholder="Add title here"
                                    className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    onChange={(e) =>
                                        setData("assignedTo", e.target.value)
                                    }
                                /> */}
                                <select
                                    className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    name="assignedTo"
                                    id="assignedTo"
                                    value={data.assignedTo}
                                    onChange={(e) =>
                                        setData("assignedTo", e.target.value)
                                    }
                                >
                                    {users.map((user) => (
                                        <option value={user.name}>
                                            {user.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="my-5">
                                <label for="status"> Set status To </label>
                                <select
                                    className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                    name="status"
                                    id="status"
                                    value={data.status}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="On-going">On-going</option>
                                    <option value="Done">Done</option>
                                </select>
                            </div>
                            <div className="space-x-2">
                                <PrimaryButton className="mt-4">
                                    Save
                                </PrimaryButton>
                                <button
                                    className="mt-4"
                                    onClick={() => {
                                        setEditing(false);
                                        reset();
                                        clearErrors();
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <div className="flex justify-between items-center font-bold">
                                <div>
                                    <svg
                                        width="25px"
                                        height="25px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            id="SVGRepo_bgCarrier"
                                            strokeWidth="0"
                                        ></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <path
                                                opacity="0.4"
                                                d="M12.3691 8.87988H17.6191"
                                                stroke="#292D32"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>{" "}
                                            <path
                                                opacity="0.4"
                                                d="M6.38086 8.87988L7.13086 9.62988L9.38086 7.37988"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>{" "}
                                            <path
                                                opacity="0.4"
                                                d="M12.3691 15.8799H17.6191"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>{" "}
                                            <path
                                                opacity="0.4"
                                                d="M6.38086 15.8799L7.13086 16.6299L9.38086 14.3799"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>{" "}
                                            <path
                                                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>{" "}
                                        </g>
                                    </svg>
                                    <h2 className="mt-4 text-lg text-gray-900 overflow: hidden;">
                                        {task.title}{" "}
                                        <small className="ml-2 text-xs text-gray-600">
                                            {dayjs(task.created_at).fromNow()}
                                        </small>
                                        {task.created_at !==
                                            task.updated_at && (
                                            <small className="text-sm text-gray-600">
                                                {" "}
                                                &middot; edited
                                            </small>
                                        )}
                                    </h2>
                                    <span className="text-gray-800 text-xs">
                                        Created by: {task.user.name}
                                    </span>
                                    <h2 className="text-gray-800 text-xs">
                                        Assigned to: {task.assignedTo}
                                    </h2>
                                </div>
                            </div>
                            <div className="container overflow-hidden">
                                <p className="mt-4 text-lg container-fluid text-gray-900">
                                    {task.description}
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </button>
        </div>
    );
}
