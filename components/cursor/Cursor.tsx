import CursorSVG from "@/public/assets/CursorSVG";
import { transform } from "next/dist/build/swc";

type Props = {
  color: string;
  x: number;
  y: number;
  message: string;
};

const Cursor = ({ color, x, y, message }: Props) => {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0 z-10"
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      <CursorSVG color={color} />
      {message && (
        <div
          className="absolute left-2 top-5 px-4 py-2  rounded-[20px]"
          style={{ backgroundColor: color }}
        >
          <p className="text-white whitespace-nowrap text-sm leading-relax">
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cursor;
