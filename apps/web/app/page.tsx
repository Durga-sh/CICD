
import { client } from "../../../packages/prisma/src/index";
export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      username durga
      {user?.username}
      password: 
      {user?.password}
    </div>
  );
}
