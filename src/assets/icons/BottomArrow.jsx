export const BottomArrow = (props) => {
  return (
    <div className="bg-transparent flex justify-center items-center ">
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        fill={props.color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 16.04C11.68 16.04 11.36 15.92 11.115 15.675L5.21997 9.78L6.27997 8.72L12 14.44L17.72 8.72L18.78 9.78L12.885 15.675C12.64 15.92 12.32 16.04 12 16.04Z" />
      </svg>
    </div>
  );
};
