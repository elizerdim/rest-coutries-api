import ClipLoader from "react-spinners/ClipLoader";

export default function Spinner({ loading }: { loading: boolean }) {
  const override = {
    display: "block",
  };

  const containerStyles = {
    width: '100%',
    height: '70svh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <div className="loader-container" style={containerStyles}>
      <ClipLoader
        color="#4338ca"
        loading={loading}
        cssOverride={override}
        size="10rem"
      />
    </div>
  );
}
