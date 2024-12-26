import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Task from "@/Components/Task";

export default function Dashboard({ auth, tasks, users }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <h3 className="font-bold text-blue-500">
                                        Pending
                                    </h3>

                                    {tasks.map((task) =>
                                        task.status === "Pending" ? (
                                            <>
                                                <div className="mt-6 text-left bg-white border-2 shadow-sm rounded-lg divide-y">
                                                    <Task
                                                        key={task.id}
                                                        users={users}
                                                        task={task}
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            ""
                                        )
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold text-yellow-500">
                                        On-going
                                    </h3>

                                    {tasks.map((task) =>
                                        task.status === "On-going" ? (
                                            <>
                                                <div className="mt-6 text-left bg-white border-2 shadow-sm rounded-lg divide-y">
                                                    <Task
                                                        key={task.id}
                                                        users={users}
                                                        task={task}
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            ""
                                        )
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold text-yellow-500">
                                        Done
                                    </h3>

                                    {tasks.map((task) =>
                                        task.status === "Done" ? (
                                            <>
                                                <div className="mt-6 text-left bg-white border-2 shadow-sm rounded-lg divide-y">
                                                    <Task
                                                        key={task.id}
                                                        users={users}
                                                        task={task}
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            ""
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
