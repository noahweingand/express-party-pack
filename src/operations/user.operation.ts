import type { Request, Response } from "express";
import type { User, UserParams } from "../types";

const users: Array<User> = [
  { id: "1", name: "Jane Doe", age: 27, hobbies: ["guitar", "books", "sports"] },
  { id: "2", name: "John Doe", age: 27, hobbies: ["sports", "movies", "cocktails"] }
];

export function getUser(req: Request<UserParams>, res: Response) {
  const { id } = req.params;

  if (!id) return res.status(400).json();

  try {
    const user = users.find((u) => u.id === id);
    if (user) return res.json(user);
  } catch (_e) {
    return res.status(500).json();
  }

  return res.status(404).json();
}
