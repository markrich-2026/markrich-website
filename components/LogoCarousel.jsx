import Marquee from "react-fast-marquee";

const logos = [
  "/logos/alt.png",
  "/logos/be.png",
  "/logos/contentstack.png",
  "/logos/cres.png",
  "/logos/grameen.png",
  "/logos/hgs.png",
  "/logos/hoh.jpg",
  "/logos/janus.jpg",
  "/logos/mcm.png",
  "/logos/mer.png",
  "/logos/network18.png",
  "/logos/psa.png",
  "/logos/shinhanbank.png",
  "/logos/syspree.png",
  "/logos/ultratech.png",
  "/logos/wyn.png",
];

const LogoCarousel = () => {
  return (
    <div style={{ width: "100%", padding: "60px 0", background: "#fff",  marginTop: "60px" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <p
          style={{
            color: "#ED3630",
            fontSize: "16px",
            fontWeight: "600",
            letterSpacing: "0.04em",
            marginBottom: "10px",
          }}
        >
          Industry Experience
        </p>
        <h2 className="text-5xl font-semibold tracking-tighter text-center md:text-4xl">
          Trusted by
          <span className="text-[#F58A07]"> leading</span> clients
        </h2>
      </div>

      <Marquee speed={80} gradient={true} gradientColor={[255, 255, 255]}>
        {logos.map((logo, index) => (
          <div
            key={index}
            style={{
              margin: "20px 60px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="Industry Logo"
              style={{
                height: "50px",
                width: "auto",
                objectFit: "contain",
                transition: "all 0.3s ease",
              }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoCarousel;
