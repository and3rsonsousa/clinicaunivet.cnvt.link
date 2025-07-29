import { redirect } from "remix";

export const loader = () => {
  return redirect(
    "https://open.spotify.com/playlist/0oEQX57LRQm8RLMeF3dqPO?si=FUfTr5suRyWERH7Q6kwnOw"
  );
};
