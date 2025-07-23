import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function HeaderMovie({ title, setSearchInput, searchInput }) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchInput(value);
    }, 400);

    return () => clearTimeout(timer);
  }, [value, searchInput]);

  return (
    <div className="md:flex items-center justify-between">
      <h2 className="my-6 blur-container w-max py-4 px-6">{title}</h2>
      <div className="w-full flex md:w-1/2 my-4">
        <input
          ref={inputRef}
          type="text"
          className="rounded-tl-2xl rounded-bl-2xl px-4 outline-0 w-full h-10 bg-[var(--primary)] text-[var(--bg)]"
          placeholder="Search movies..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="h-10 flex items-center w-20 justify-center border-l-0 rounded-tr-2xl rounded-br-2xl bg-white"
          onClick={handleFocus}
        >
          <Search strokeWidth={"0.075rem"} color="var(--accent)" />
        </button>
      </div>
    </div>
  );
}
