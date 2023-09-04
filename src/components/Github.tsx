import Link from "next/link";
import { Github } from "lucide-react";
export function GithubImage() {
  return (
    <Link
      href={"https://github.com/nilloferreiira/ai-movie"}
      className="flex items-center justify-center gap-2 opacity-80 hover:opacity-100 transition-all mb-2 text-white"
    >
      <div className="bg-white rounded-full p-2 h-12 w-12 flex items-center justify-center">
        <Github color="black" />
      </div>
      nilloferreiira
    </Link>
  );
}
