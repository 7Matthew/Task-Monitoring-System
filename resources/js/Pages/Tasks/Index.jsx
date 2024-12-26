import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/react";
import Task from "@/Components/Task";

export default function Index({ auth, tasks }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: "",
        description: "",
        file: "",
        assignedTo: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("tasks.store"), { onSuccess: () => reset() });
        post(route("tasks.upload"), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Tasks Monitoring" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <div className="my-5">
                        <label for="title"> Title </label>
                        <input
                            type="text"
                            maxLength={90}
                            value={data.title}
                            placeholder="Add title here"
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            onChange={(e) => setData("title", e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label for="Description"> Description </label>
                        <textarea
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
                            onChange={(e) => setData("file", e.target.value)}
                        ></input>{" "}
                    </div>
                    <div className="my-5">
                        <label for="assignedTo"> Assigned To </label>
                        <input
                            type="text"
                            maxLength={50}
                            value={data.assignedTo}
                            placeholder="Add title here"
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            onChange={(e) =>
                                setData("assignedTo", e.target.value)
                            }
                        />
                    </div>
                    <InputError message={errors.title} className="mt-2" />
                    <InputError message={errors.description} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>
                        Create Task
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
