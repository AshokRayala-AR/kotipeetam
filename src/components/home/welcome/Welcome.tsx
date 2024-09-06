import welcomemain from "../../../assets/images/welcomemainimg.png";

function Welcome() {
  return (
    <div className="h-[70vh] max-w-screen ">
      <div className="h-full ">
        <img
          src={welcomemain}
          alt="welcomemain"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}

export default Welcome;
