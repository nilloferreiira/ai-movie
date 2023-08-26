import { Lightning } from "phosphor-react";
import { Ring } from "@uiball/loaders";

interface ButtonProps {
  change: () => void;
  loading: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.change}
      className="flex items-center px-4 py-2 rounded-lg text-white gap-2 bg-gradient-to-r from-principal-purple to-principal-pink hover:brightness-150 transition-all"
    >
      {props.loading ? (
        <div className="px-4 opacity-70">
          <Ring size={32} lineWeight={5} speed={2} color="white" />
        </div>
      ) : (
        <div className="flex items-center gap-1">
          Nova recomendação
          <Lightning
            size={32}
            className="rounded-full p-2 bg-principal-pink"
            weight="bold"
          />
          </div>
      )}
    </button>
  );
}
