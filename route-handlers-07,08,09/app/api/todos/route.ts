import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
const API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET(request: Request) {
  const origin = request.headers.get('origin');

  const res = await fetch(DATA_SOURCE_URL);
  const todos: Todo[] = await res.json();

  // CORS problem
  // test on google.com open console and fetch('http://localhost:3000/api/todos')
  // return NextResponse.json(todos);

  // no CORS problem
  // test on google.com open console and fetch('http://localhost:3000/api/todos')
  return new NextResponse(JSON.stringify(todos), {
    headers: {
      'Access-Control-Allow-Origin': origin || "*",
      'Content-Type': 'application/json'
    }
  });
}

// type: GET
// http://localhost:3000/api/todos

export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();

  if (!id) return NextResponse.json({ message: "Todo is required" });

  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
  });

  return NextResponse.json({ message: `Todo ${id} deleted` });
}

// type: DELETE
// body: { "id": 5 }
// http://localhost:3000/api/todos

export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json();

  if (!userId || !title) return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(DATA_SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  });

  const newTodo: Todo = await res.json();

  return NextResponse.json(newTodo);
}

// type: POST
// body: { "userId": 5 , "title": "Make the coffe"}
// http://localhost:3000/api/todos

export async function PUT(request: Request) {
  const { userId, id, title, completed }: Todo = await request.json();

  if (!userId || !id || !title || typeof completed !== "boolean")
    return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed,
    }),
  });

  const updatedTodo: Todo = await res.json();

  return NextResponse.json(updatedTodo);
}

// type: PUT
// body: { "userId": 5 , "id": 5, "title": "Make the coffe", "completed": true }
// http://localhost:3000/api/todos
