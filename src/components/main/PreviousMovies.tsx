interface PreviousProps {
  previous: () => void;
}

export function PreviousMovies(props: PreviousProps) {
  return (
    <button
      onClick={props.previous}
      className="flex items-center px-4 py-2 rounded-lg text-white gap-2 bg-gradient-to-l from-principal-purple to-principal-pink hover:brightness-150 transition-all"
    >
      Voltar
    </button>
  );
}
