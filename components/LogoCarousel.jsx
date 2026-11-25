import Marquee from "react-fast-marquee";

// [file, width at 50px height, client name]
const logos = [
  ["/logos/alt.png", 244, "Alt"],
  ["/logos/be.png", 83, "BE"],
  ["/logos/contentstack.png", 227, "Contentstack"],
  ["/logos/cres.png", 220, "Cres"],
  ["/logos/grameen.png", 136, "Grameen"],
  ["/logos/hgs.png", 156, "HGS"],
  ["/logos/hoh.jpg", 109, "HOH"],
  ["/logos/janus.jpg", 50, "Janus"],
  ["/logos/mcm.png", 123, "MCM"],
  ["/logos/mer.png", 146, "MER"],
  ["/logos/network18.png", 168, "Network18"],
  ["/logos/psa.png", 103, "PSA"],
  ["/logos/shinhanbank.png", 337, "Shinhan Bank"],
  ["/logos/syspree.png", 122, "Syspree"],
  ["/logos/ultratech.png", 90, "UltraTech"],
  ["/logos/wyn.png", 443, "WYN"],
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
        {logos.map(([logo, width, name], index) => (
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
              alt={`${name} logo`}
              width={width}
              height={50}
              loading="lazy"
              decoding="async"
              style={{
                height: "50px",
                width: `${width}px`,
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
