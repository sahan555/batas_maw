import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={props.className}>
      <IoIosArrowBack className="w-full h-full" />
    </div>
  );
};

export const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={props.className}>
      <IoIosArrowForward className="w-full h-full" />
    </div>
  );
};
