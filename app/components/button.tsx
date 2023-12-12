export function Button(props: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <div
      onClick={props.onClick}
      className={` ${
        props.disabled
          ? "hover:cursor-not-allowed bg-gray-400"
          : `hover:cursor-pointer bg-indigo-600 hover:-rotate-2 hover:scale-110 `
      } 
                     grow inline-block rounded px-8 py-3 text-sm font-medium
                     text-white transition focus:outline-none focus:ring
                     text-center`}
    >
      {props.label}
    </div>
  );
}
