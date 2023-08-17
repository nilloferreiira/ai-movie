import { Lightning } from "phosphor-react";

interface ButtonProps {
  change: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.change}
      className="flex items-center px-4 py-2 rounded-lg text-white gap-2 bg-gradient-to-r from-principal-purple to-principal-pink hover:brightness-150 transition-all"
    >
      Nova recomendação
      <Lightning
        size={32}
        className="rounded-full p-2 bg-principal-pink"
        weight="bold"
      />
    </button>
  );
}
