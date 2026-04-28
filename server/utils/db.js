import fs from "node:fs/promises";
import path from "node:path";

const DB_FILE = path.resolve("server", "data.json");

const defaultDb = {
  users: [],
  todos: [],
};

export async function ensureDb() {
  try {
    await fs.access(DB_FILE);
  } catch {
    await fs.mkdir(path.dirname(DB_FILE), { recursive: true });
    await fs.writeFile(DB_FILE, JSON.stringify(defaultDb, null, 2), "utf-8");
  }
}

export async function readDb() {
  await ensureDb();
  const raw = await fs.readFile(DB_FILE, "utf-8");
  return JSON.parse(raw);
}

export async function writeDb(db) {
  await fs.writeFile(DB_FILE, JSON.stringify(db, null, 2), "utf-8");
}

export function nextId(items) {
  if (!items.length) {
    return 1;
  }
  return Math.max(...items.map((item) => item.id)) + 1;
}
