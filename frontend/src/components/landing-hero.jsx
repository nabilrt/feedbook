import socialMediaLogo from "../assets/social.svg";

const LandingHeroSection = () => {
  return (
    <div className="flex flex-col space-y-1 justify-center items-center m-5 mt-10">
      <img src={socialMediaLogo} alt="" className="w-[200px] h-[200px]" />
      <p className="tracking-wider text-3xl text-[#03a1ef] font-semibold">
        FeedBook
      </p>
      <p className="tracking-wide text-lg">
        An app where you can connect with friends
      </p>
    </div>
  );
};
export default LandingHeroSection;
