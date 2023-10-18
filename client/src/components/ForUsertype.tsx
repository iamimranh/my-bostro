type props = { catagory: string; onCLick: () => void; catagoryType: string };
const ForUsertype = (Props: props) => {
  return (
    <div>
      <button
        className={` ${
          Props.catagory === Props.catagoryType ? "bg-primary" : ""
        } border border-primary rounded p-2 `}
        onClick={Props.onCLick}
      >
        {Props.catagory}
      </button>
    </div>
  );
};

export default ForUsertype;
