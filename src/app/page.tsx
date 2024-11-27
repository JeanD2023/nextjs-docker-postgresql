import { addTask } from "./actions/actions";


export  default async function Home() {
  const task = [
    {
      id: 1,
      title: "Task 1",
    },
    {
      id: 2,
      title: "Task 2",
    },
  ];

  return (
    <main className="bg-zinc-200 flex min-h-screen flex-col items-center pt-10">
      <h1 className="text-3xl font-medium">All Task</h1>
      <ul className="my-10 text-center">
        {task.map((task)=>(
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

        <form action={addTask} className="space-x-2 h-4">
        <input type="text" name="title" className="px3 py-1 rounded" placeholder="Add"/>
        <button type="submit" className="bg-blue-500 px-3 py-1 text-white rounded">Add Task</button>
        </form>
    </main>
  );
}