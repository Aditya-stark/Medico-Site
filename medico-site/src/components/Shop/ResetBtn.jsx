const ResetBtn = ({ onReset }) => {
  return (
    <button
      onClick={onReset}
      className="bg-red-400 text-white px-4 py-2 rounded"
    >
      Reset
    </button>
  );
};

export default ResetBtn;
