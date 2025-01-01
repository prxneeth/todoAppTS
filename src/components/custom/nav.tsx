import { Moon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/slices/themeSlice";
import { RootState } from "@/redux/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const dark = useSelector((state: RootState) => state.theme.dark);
  //   document.body.style.backgroundColor = dark ? "#212121" : "#f7fafc";
  if (dark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <nav
      className={`flex justify-between p-3 px-8 ${
        dark ? "bg-green-500" : "bg-black"
      }`}
    >
      <h2 className="text-white font-semibold ">TODOSAPP</h2>

      <Moon
        size={23}
        className="text-white"
        cursor="pointer"
        onClick={() => dispatch(toggleTheme(dark))}
      />
    </nav>
  );
};

export default Navbar;
