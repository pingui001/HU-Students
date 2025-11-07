export async function getUsers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Users`);
  return res.json();
}

export async function getStudents() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Students`);
  return res.json();
}
